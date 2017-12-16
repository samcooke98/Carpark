import React from "react";
import { connect } from "react-redux"

import RenderFloor from '../components/RenderFloor'

const XYtoSVG = (input) => input.reduce((prevVal, curVal) => prevVal += `L ${curVal[0]} ${curVal[1]}`, "")


const mapStateToProps = (state, ownProps) => ({
	path: XYtoSVG(state.path)
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RenderFloor); 