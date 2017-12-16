import { createSelector } from 'reselect'
import { verboseCalc as calcAirflowDetail } from "../utils/carparkMath";

const calcArea = require('area-polygon');

console.log(
	calcArea([
		[0, 0],
		[0, 4],
		[4, 4],
		[4, 0]
	])
)
const getPath = state => state.path;

export const getArea = createSelector([getPath], (result) => calcArea(result))


const getN1 = state => state.numberOfParks;
const getN2 = state => state.constants.n2;
const getD1 = state => state.constants.d1;
const getD2 = state => state.constants.d2;
const getStaffExposure = state => state.constants.e;
const getParkingUsage = state => state.constants.p;
const getStaffFactor = state => state.constants.f;
const getVehicleFactor = state => state.constants.t

export const getAirflowDets = createSelector([
	getN1, getN2, getD1, getD2, getStaffExposure, getStaffFactor, getParkingUsage, getVehicleFactor, getArea
], calcAirflowDetail) 