import React from 'react';
import Riser from '../components/Riser'
import { connect } from 'react-redux'
import { selectRiser } from "../redux/actions"

const mapStateToProps = (state, ownProps) => ({
	input: Object.keys(state.risers).map(val => state.risers[val]),
	selectedId: state.selectedRiser
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	select: (id) => dispatch(selectRiser(id))

})

const RiserContainer = connect(mapStateToProps, mapDispatchToProps)((props) => (
	props.input.map((obj, i) => (
		<Riser posX={obj.pos[0]} posY={obj.pos[1]} key={i} selected={obj.id == props.selectedId} onClick={() => props.select(obj.id)} />)
	)
))

export default RiserContainer