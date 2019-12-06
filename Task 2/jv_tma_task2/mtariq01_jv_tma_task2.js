/**
**  A small application that will calculate and display the fuel
**  efficiency of a car in both metric and imperial units.
**  @author Salik Tariq
**/

/**
** Function to calculate the fuel efficiency in metric units. 
** takes as an argument kilometers of type Number and litres of type Number.
** @return a string containing fuel efficiency in metric units.
**/ 

function fuelEfficiencyMetric(kilometers, litres){
	return "Your car has a fuel economy of " + ((litres/kilometers)*100).toFixed(2) + " litres per hundred kilometers.";
}

/**
** Function to calculate the fuel efficiency in imperial units. 
** takes as an argument kilometers of type Number and litres of type Number.
** @return a string containing fuel efficiency in imperial units.
**/ 
 
function fuelEfficiencyImperial(kilometers, litres){
	/** @param miles and gallons of type Number to contain converted values 
	    Coversion value source(s): 
		https://www.metric-conversions.org/volume/uk-gallons-to-liters.htm
        https://www.metric-conversions.org/length/kilometers-to-miles.htm
	**/
	let miles = kilometers * 0.62137;
	let gallons = litres * 0.219969;
	
	return "Your car has a fuel economy of " + ((gallons/miles)*100).toFixed(2) + " gallons per hundred miles.";	
}

// Code to output result on the console.

console.log(fuelEfficiencyMetric(500,52.28));
console.log(fuelEfficiencyImperial(500,52.28));