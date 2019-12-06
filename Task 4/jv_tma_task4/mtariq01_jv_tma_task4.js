/**
**  An application to create a nested data structure representing lake depths
**  in fathoms. It finds the deepest lake in the collection, and
**  display its name and depth in metres. 
**  @author Salik Tariq
**/



/**
 ** Function to get the deepest lake.
 ** takes as an argument lakeData of type nested object.
 ** @return an array containing the name of deepest lake and the depth of corresponding deepest lake.
 **/

function deepestLake(lakeData){
    let deepestDepth = 0;
    let deepestLake = "";
    for (let key1 in lakeData){
        for (let key2 in lakeData[key1]){
            if (lakeData[key1].depth > deepestDepth) {
                deepestDepth = lakeData[key1].depth;
                deepestLake = lakeData[key1].name;
            }
        }
    }
    return [deepestLake,deepestDepth];
}

/**
 ** Function to convert the depth given in fathoms into metres
 ** takes as an argument depth of type Number.
 ** @return a Number containing the depth in meters.
 **/

function depthInMeters(depth){
    //conversion multiplier source: https://www.unitconverters.net/length/fathom-to-meter.htm
    return depth * 1.8288;
}

/**
 ** Function to display the deepest lake name and its depth in metres in the console.
 ** @return output to console the deepest lake name and depth in meters.
 **/

function displayDeepestLake(){
    let lakeData = (function (){
        let lake = {
            0:{name: "Caspian Sea", depth: 560},
            1:{name: "Tarn Hows", depth: 53},
            2:{name: "Crater Lake", depth: 324},
            3:{name: "Lake Tanganyika", depth: 803},
            4:{name: "Lake Vostok", depth: 546},
            5:{name: "Lake Baikal", depth: 897}
        };
        return lake;
    })();
    let deepestLakeData = deepestLake(lakeData);
    let deepestLakeName = deepestLakeData[0];
    let deepestLakeDepth = depthInMeters(deepestLakeData[1]).toFixed(2);
    console.log("The deepest lake is: " + deepestLakeName);
    console.log("This lake is " + deepestLakeDepth + "m deep.");
}

//** Calling the function displayDeepestLae to produce output on console **//
displayDeepestLake();


