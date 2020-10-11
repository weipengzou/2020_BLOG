import React from 'react'
import './App.less'
import Frame from './components/Frame'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './pages'
const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/'>
					<Frame />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
