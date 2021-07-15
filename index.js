// Write your solution in this file!
// To start, define a driver variable and assign it to an Object.


let driver = new Object();
// "before each" hook for "returns a driver with the original key value pairs and the new key value pair":

function updateDriverWithKeyAndValue (driverObj, key, value) {
    return Object.assign({}, driverObj, {[key]: value});
}
//updates driver with given key and value (destructive)
// and return the entire updated driver

 function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value){
     driverObj[key] = value;
     return driverObj;
 }

 //deletes key from clone of driver and returns new driver
 // does not modify the original driver (its not destructive)

 function deleteFromDriverByKey(driverObj,key){
     const newDriverObj = Object.assign({}, driverObj);
     delete newDriverObj[key];
     return newDriverObj
 }

 // returns driver without the delete key value pair
 // modifies the original driver (destructive)

 function destructivelyDeleteFromDriverByKey(driverObj,key){
     delete driverObj[key];
     return driverObj;
 }