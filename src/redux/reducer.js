//@flow
import * as actionTypes from "./actionTypes"
import { handleActions } from "redux-actions";

const initialState = {
	//An array of points (x,y) describing the floor plate
	path: [
		[0, 0],
		[1000, 0],
		[1000, 100],
		[0, 100],
	],
	risers: {
		'abc': {
			id: 'abc',
			pos: [250, 50],
			// areaServed: (1000 * 100 )
		},
		'def': {
			id: 'def',
			pos: [750, 50],
			bias: 0.75,
			// areaServed: 
		}
	},
	selectedRiser: null,
	//TODO: A better name for these
	//They aren't really constants (REFACTOR) 
	constants: { 
		n2: 0, //Number of cars parking on other levels,
		d1: 160,
		d2: 131,
		e: 1, //Staff exposure
		p: 0.4,
		t: 1, //Vehicle Type Factor,
		f: 1,
	},

	numberOfParks: 100,
	// carParks: 
	//TODO: how to represent? 
};

export type ReduxState = { 
	path: Array<Array<number,number>>,
	risers: { 
		[id: string]: { 
			id: string,
			pos: Array<number,number>
		}
	},
	selectedRiser: ?string,
	
}


export default handleActions({ 
	[actionTypes.SELECT_RISER]: (state, {payload: riserId}) => ({...state, selectedRiser: riserId}),

	[actionTypes.UPDATE_RISER]: (state, {payload: newObj}) => ({...state, risers: { 
		...state.risers,
		[state.selectedRiser]: { 
			...state.risers[state.selectedRiser],
			...newObj
		}
	}})
	
}, initialState);