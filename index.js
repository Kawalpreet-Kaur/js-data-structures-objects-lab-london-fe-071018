// Write your solution in this file!

const driver = {driverName:'SAM'};


function updateDriverWithKeyAndValue(driver, key, value){
  const newClone ={...driver};
  newClone[key]=value;
  return newClone;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}