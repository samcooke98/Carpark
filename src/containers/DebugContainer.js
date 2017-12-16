import React from 'react';

import { connect } from "react-redux";

import { getArea } from "../redux/selectors"

const DebugContainer = (props) => (
	<div>
		<h3> DEBUG INFO </h3>
		{JSON.stringify(props)}
	</div>
)

const mapStateToProps = (state, ownProps) => ({ 
	area: getArea(state),
	state: state,
})

export default connect( mapStateToProps, null)(DebugContainer);