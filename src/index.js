import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.component';
import './styles/main.sass';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />,document.getElementById('root'));

serviceWorker.unregister();
