//@flow
//Not really sure how this is calculated?
//D1 is the "Average driving distance for exit of a car parked on the level under consideration."
//D2 is the "Average driving distance for exit of a car parked on other levels, the route of which passes through the level under consideration but excluding a queue area"																	

type inputType = Array<{ cars: number, distance: number }>


const sampleInput = [
	{ cars: 19, distance: 12 },
]

const sum = (prev, cur) => prev += cur;

const verboseCalc = (input: inputType) => ({
	avg: input.map((valpair) => valpair.cars * valpair.distance).reduce(sum, 0),
	totalCars: input.map((valpair) => valpair.cars),
})

/**
 * This is referred to as D1 or  in the spreadsheet \ carparkMath.js 
 * 
 * @param {} input 
 */
const getAverage = (input: inputType) => verboseCalc(input).avg;

export default getAverage;
export { verboseCalc } 
export type { inputType };