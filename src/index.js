import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

import './assets/sass/mainStyle.scss';
import './index.css';
import App from './Root';
import reportWebVitals from './reportWebVitals';

Loadable.preloadAll().then(() => {
	return ReactDOM.render(
		<React.Fragment>
			<App />
		</React.Fragment>,
		document.getElementById('root')
	);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
