//@flow
const FACTORS = { 
	cars: 1,
	bikes: 0.25,
}

const calcVehicleFactor = ( totalVehicles, cars, bikes ) => (cars * FACTORS.cars + bikes * FACTORS.bikes) / totalVehicles;

export default calcVehicleFactor;
