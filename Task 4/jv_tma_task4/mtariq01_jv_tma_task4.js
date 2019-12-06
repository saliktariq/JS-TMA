/**
**  An application to create a nested data structure representing lake depths
**  in fathoms. It finds the deepest lake in the collection, and
**  display its name and depth in metres. 
**  @author Salik Tariq
**/


let lakes = {
    0:{name: "Caspian Sea", depth: 560},
    1:{name: "Tarn Hows", depth: 53},
    2:{name: "Crater Lake", depth: 324},
    3:{name: "Lake Tanganyika", depth: 803},
    4:{name: "Lake Vostok", depth: 546},
    5:{name: "Lake Baikal", depth: 897}
};
let deepestDepth = 0;
let deepestLake = "";
for (let key1 in lakes){
    for (let key2 in lakes[key1]){
        if (lakes[key1].depth > deepestDepth) {
            deepestDepth = lakes[key1].depth;
            deepestLake = lakes[key1].name;
        }
        }
    }
console.log(deepestLake);
console.log(deepestDepth);









