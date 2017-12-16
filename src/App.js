import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './redux/reducer';
import AppComponent from './components/AppComponent'

let store = createStore(app)

const App = (props) => (
	<Provider store={store}>
		<AppComponent />
	</Provider>
);

export default App;
