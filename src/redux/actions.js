//@flow
import * as actionTypes from "./actionTypes"


export const SetScale = (scale:number) => ({ 
	type: actionTypes.SET_SCALE,
	payload: scale
})

export const selectRiser = (riserIndex: number) => ({ 
	type: actionTypes.SELECT_RISER,
	payload: riserIndex,
})

export const updateRiser = (riserObj: {}) => ({ 
	type: actionTypes.UPDATE_RISER,
	payload: riserObj
})