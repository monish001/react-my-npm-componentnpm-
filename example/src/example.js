var React = require('react');
var ReactDOM = require('react-dom');
var MyComponent = require('react-my-component');

var App = React.createClass({
	render () {
		return (
			<div>
				<MyComponent />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
