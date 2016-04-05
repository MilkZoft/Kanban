import 'style!css!./main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import alt from './lib/alt';
import storage from './lib/storage';
import persist from './lib/persists';

persist(alt, storage, 'app');

ReactDOM.render(<App />, document.querySelector('#app'));
