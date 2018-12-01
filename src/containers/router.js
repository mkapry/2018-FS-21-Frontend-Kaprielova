
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './router.css';
import Welcome from './Welcome/Welcome.js';
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


const Blogs = () => (
  <div>Blogs</div>
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