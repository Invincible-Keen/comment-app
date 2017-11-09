import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CommentApp from './CommentApp.js';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CommentApp />, document.getElementById('root'));
registerServiceWorker();
