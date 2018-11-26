import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Welcome from './Welcome/Welcome.js';
import FormContainer from './index.js';


function Full() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/Blog'>Blog</Link>
          </li>
        </ul>

        <hr />

        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/posts' component={Blog} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <Welcome />
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
      <FormContainer id={match.params.BlogId} key={match.params.BlogId} />
    </div>
  );
}

function NewBlog() {
  return (
    <div>
      <h2>Create a blog</h2>
      < FormContainer/>
    </div>
  );
}




export default Full;