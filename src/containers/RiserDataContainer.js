import React from 'react';

import { connect } from 'react-redux'
import { getSelectedRiser } from '../redux/selectors'
import { updateRiser } from "../redux/actions"

const mapStateToProps = (state, ownProps) => ({
	x: (getSelectedRiser(state).pos || [])[0],
	y: (getSelectedRiser(state).pos || [])[1],
	id: getSelectedRiser(state).id,

	// bias: getSelectedRiser(state.id).servedArea / 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	// setX: ()
	update: (newObj) => dispatch(updateRiser(newObj))
})

class RiserDataContainer extends React.Component {
	updateX = ({ target }) => this.props.update({ pos: [target.value, this.props.y] })
	updateY = ({ target }) => this.props.update({ pos: [this.props.x, target.value] })

	setArea = ( {target}) => this.props.update({ })


	render() {
		return (
			<div>
				<h3> Riser: {this.props.id} </h3>
				<label> X: </label> <input type='text' value={this.props.x} onChange={this.updateX} /> 
				<label> Y: </label> <input type='text' value={this.props.y} onChange={this.updateY} />
				<br/> 
				{/* <label> Area it serves: </label> <input type='text' /> */}
				{/* <label> Bias </label> <input readOnly type='text' value={ this.props.bias } /> */}

			</div>
		)
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(RiserDataContainer);