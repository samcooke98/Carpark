import getAirflow, { verboseCalc } from "../carparkMath.js";
// const carparkMath = require('../carparkMath')
console.log(getAirflow);


const n1 = 372, n2 = 0, d1 = (59566.54 / 372), d2 = 131, staffExposure = 1, staffFactor = 1, parkingUsage = 0.4, vehicleFactor = 1, area = 15384;

describe("Carpark math", () => {
	describe("Basic calculation", () => {
		console.log(verboseCalc(n1, n2, d1, d2, staffExposure, staffFactor, parkingUsage, vehicleFactor, area))
	})


})		