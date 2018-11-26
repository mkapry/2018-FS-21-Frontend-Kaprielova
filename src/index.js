<<<<<<< Updated upstream
import MessageForm from './lib/components/message/index.js';
import FormFile from './lib/components/addfile/file.js'
import FormGeo from './lib/components/geolocation/index.js'
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Full from './containers/router.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Full />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> Stashed changes
