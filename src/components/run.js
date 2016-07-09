require('./style.scss');
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, Link, browserHistory, IndexRedirect} from 'react-router'
import App from './app'
import Home from './home/home'
import Dashboard from './dashboard/dashboard'
import About from './about/about'
import Poetry from './poetry/poetry'
import Stories from './stories/stories'
import Art from './art/art'
import Submit from "./submit/submit"


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="" component={Dashboard}>
                <IndexRoute component={Home}/>
                <Route path="submit" component={Submit}/>
                <Route path="about" component={About}/>
				<Route path="stories" component={Stories} />
				<Route path="poetry" component={Poetry} />
				<Route path="art" component={Art} />
			</Route>
		</Route>
	</Router>, 
	document.getElementById('app'));