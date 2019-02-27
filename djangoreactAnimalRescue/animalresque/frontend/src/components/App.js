import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './animals/Dashboard';
import Time from './animals/Time';

class App extends React.Component {
	render(){
		return (
		<Fragment>
			<Fragment>
				<Header />
				<center><h1>¡Hello and Welcome!<br/></h1>This is my first Django-restFramework-React App!</center>
				<div className="container">
					<Dashboard />
				</div>
				<Time />
			</Fragment>
		</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
