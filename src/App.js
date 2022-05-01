import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Categories from './components/Categories'
import RandomMeal from './components/RandomMeal'
import HomePage from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/categories' component={Categories} />
					<Route exact path='/random' component={RandomMeal} />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
