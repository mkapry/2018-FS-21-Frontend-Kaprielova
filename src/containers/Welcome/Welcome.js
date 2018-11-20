import React from 'react';

import './Welcome.css';

const name = (props) => (
    <div className="Welcome">
        Welcome, {props.value}
    </div>
);

export default Welcome;