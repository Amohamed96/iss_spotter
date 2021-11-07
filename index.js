const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});
const coords = {latitude: 0 , longitude: 0}
fetchCoordsByIP("206.223.174.242", (error, ip) => {
  if (error) {
    console.log("404 not found" , error);
    return;
  }
  coords.latitude = data.latitude;
  coords.longitude = data.longitude;
console.log(coords)
});


const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});
// const { nextISSTimesForMyLocation } = require('./iss');

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   console.log(passTimes);
// });