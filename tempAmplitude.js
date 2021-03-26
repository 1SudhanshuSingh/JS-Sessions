"use strict";
const tempArray = [-1, -2, 4, 6, 23, 19, 8, 0, "error", 25, 29];
//Amplitude is the difference between max and min temperature
//Find min temp and max temp
//Ignore error in the array
//Calculate Aplitude
const getTempAmp = temps => {
  let maxTemp = tempArray[0];
  let minTemp = tempArray[0];
  for (let i = 0; i < tempArray.length; i++) {
    if (typeof tempArray[i] !== "number") continue;
    if (tempArray[i] > maxTemp) maxTemp = tempArray[i];
    if (tempArray[i] < minTemp) minTemp = tempArray[i];
  }
  return maxTemp - minTemp;
};
console.log(getTempAmp(tempArray));
