import React from 'react';
import glamorous from 'glamorous'
import 'glamor/reset'

const TabButton = glamorous.button({
	margin: '12',
	paddingTop: '4',
	background: "none",
	border: "none",
	textAlign: 'left',
	paddingLeft: 0,
	// ":focus": { 
	// 	outline: '3px solid black'
	// }
}, props => ({
	color: props.active ? "blue" : "default",
	borderBottom: props.active ? "blue 2px solid" : "lightgrey 2px solid"
}))

export default TabButton;