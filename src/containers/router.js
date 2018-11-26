import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './router.css';
import Welcome from './Welcome/Welcome.js';
import FormContainer from './index.js';


function Full() {
  return (
    <Router >
      <div className="Full">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/blogs'>Blogs</Link>
          </li>
           <li>
            <Link to='/newblog'>NewBlog</Link>
          </li>
        </ul>

        <hr />

        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/newblog' component={NewBlog} />
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
    </div>
  );
}


function NewBlog() {
  return (
    <div>
      <h2>Create a blog</h2>
      <FormContainer/>
    </div>
  );
}




export default Full;