import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';

class App extends React.Component {
	render(){
		return (
		<Fragment>
			<Fragment>
				<Header />
				<center><h1>¡Hello and Welcome!<br/></h1>This is my first Django-restFramework-React App!</center>
				<div className="container">
				</div>
			</Fragment>
		</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
