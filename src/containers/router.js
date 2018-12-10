
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './router.css';
//import Welcome from './Welcome/Welcome.js';
import BlogList from './BlogList/BlogList.js';
import FormContainer from './index.js';
import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import Auth from './Auth/Auth.js';
import {connect} from 'react-redux';
import * as actions from './store/actions';
import Socket from './Socket/Socket';

const Home = () => (
  <div>Home</div>
);


class App extends Component {
  componentDidMount() {
    this.props.checkToken();
  }
 render() {
    let route =
      (
        <Layout>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/profile' exact component={Auth} />
              <Redirect to='/'></Redirect>
            </Switch>
        </Layout>
      );
     if(this.props.token) {
      route = (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/profile' component={Profile} />
                <Route path='/blogs' component={Blogs} />
                <Route path='/newblog' component={FormContainer} />
            </Switch>
        </Layout>
      )
    };


  function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <Auth />
    </div>
  );
}

 function Blogs({ match }) {
  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        <li>
          <Link to={`${match.url}/Blog1`}>Blog #1</Link>
        </li>
        <li>
          <Link to={`${match.url}/Blog2`}>Blog #2</Link>
        </li>
        <li>
          <Link to={`${match.url}/Blog3`}>Blog #3</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:BlogId`} render={Blog} />

    </div>
  );
}

function Blog({ match }) {
  return (
    <div>
      <h2>{match.params.BlogId}</h2>
      <BlogList id={match.params.BlogId} key={match.params.BlogId} />
    </div>
  );
}
  return (
    <div className="Full">
     <Router>
          {route}

      </Router>
      <Socket/>
    </div>
    )
  }
}





const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
};

const mapDispatchToProps = (dispatch) => {
  return  {
    checkToken: () => dispatch(actions.authCheckState())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);