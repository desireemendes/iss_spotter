const { fetchMyIP } = require('./iss_promises');
const { fetchCoordsByIP } = require('./iss_promises');
const { fetchISSFlyOverTime } = require('./iss_promises');
const { nextISSTimesForMyLocation } = require('./iss_promises');

fetchMyIP()
.then(fetchCoordsByIP)
.then(fetchISSFlyOverTime)
.then(body => console.log(body));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });