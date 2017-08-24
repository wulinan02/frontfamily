import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers';

const store=createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(<Provider ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
