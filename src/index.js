import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import ScrollToTop from './components/UI/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ScrollToTop />
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
