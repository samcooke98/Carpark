//@flow
const max = Math.max;
//Percentage: 
const CONSTANT_SAFETY_FACTOR = 2;



const C = (n1, n2, d1, d2, P) => {
	console.log(n1, n2, d1, d2, P); return P * ((100 * n1) + (n1 * d1) + (n2 * d2))
}
/**
 * Magic Formula Q_a: 
 * 
 * @param {} e 
 * @param {*} T 
 * @param {*} C 
 * @returns The Flow rate in Litres/Second
 */
const Qa = (staffExposure, vehicleFactor, c) => 0.85 * staffExposure * vehicleFactor * c;

const Qb = (staffFactor, vehicleFactor) => 2000 * staffFactor * vehicleFactor

const Qc = (area) => 2.5 * area;

// const requiredFlow = (  )

/**
 * Returns an object with all the info
 * @param {*} n1 
 * @param {*} n2 
 * @param {*} d1 
 * @param {*} d2 
 * @param {*} staffExposure (E)
 * @param {*} staffFactor  (F)
 * @param {*} parkingUsage  (P)
 * @param {*} vehicleFactor (T) 
 * @param {*} area 
 */
const verboseCalc = (
	n1, n2, d1, d2, staffExposure, staffFactor, parkingUsage, vehicleFactor,
	area,
	// L_exit, L_entry
) => ({
	qa: Qa(staffExposure, vehicleFactor, C(n1, n2, d1, d2, parkingUsage)),
	qb: Qb(staffFactor, vehicleFactor),
	qc: Qc(area),
	C: C(n1, n2, d1, d2, parkingUsage),

	exhaustAirFlow: max(
		Qa(staffExposure, vehicleFactor, C(n1, n2, d1, d2, parkingUsage)),
		Qb(staffFactor, vehicleFactor),
		Qc(area)
	),

	exhaustWithSafety: max(
		Qa(staffExposure, vehicleFactor, C(n1, n2, d1, d2, parkingUsage)),
		Qb(staffFactor, vehicleFactor),
		Qc(area)
	) + max(
		Qa(staffExposure, vehicleFactor, C(n1, n2, d1, d2, parkingUsage)),
		Qb(staffFactor, vehicleFactor),
		Qc(area)
	) * (CONSTANT_SAFETY_FACTOR / 100),
	minMakeupFlow: (0.75) * max(
		Qa(staffExposure, vehicleFactor, C(n1, n2, d1, d2, parkingUsage)),
		Qb(staffFactor, vehicleFactor),
		Qc(area)
	),

	maxMakeupFlow: (0.9) * max(
		Qa(staffExposure, vehicleFactor, C(n1, n2, d1, d2, parkingUsage)),
		Qb(staffFactor, vehicleFactor),
		Qc(area)
	),

	checkOne: max(
		Qa(staffExposure, vehicleFactor, C(n1, n2, d1, d2, parkingUsage)),
		Qb(staffFactor, vehicleFactor),
		Qc(area)
	) / (area),

	checkTwo: max(
		Qa(staffExposure, vehicleFactor, C(n1, n2, d1, d2, parkingUsage)),
		Qb(staffFactor, vehicleFactor),
		Qc(area)
	) / (n1)
})

const getAirflow = (
	n1, n2, d1, d2, staffExposure, staffFactor, parkingUsage, vehicleFactor,
	area,
	// L_exit, L_entry
) => verboseCalc(n1, n2, d1, d2, staffExposure, staffFactor, parkingUsage, vehicleFactor, area).exhaustAirFlow

export default getAirflow;
export { verboseCalc }