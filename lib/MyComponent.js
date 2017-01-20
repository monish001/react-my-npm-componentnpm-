'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');

var MyComponent = React.createClass({
	displayName: 'MyComponent',

	render: function render() {
		return React.createElement(
			'div',
			{ style: { 'color': 'red' } },
			'My Component'
		);
	}
});

exports['default'] = MyComponent;
module.exports = exports['default'];