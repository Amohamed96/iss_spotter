const request = require('request');

const fetchMyIP = function(callback) {
  request("https://api.ipdata.co?api-key=49c8e358715717e0c23efa66927f829059c390f9306cd70658288954", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
    
    
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://api.freegeoip.app/json/${ip}?apikey=d4bc7b80-3e3e-11ec-94d6-f3825dc47f56`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${body}`;
      callback(msg, null);
      return;
    }
    data = JSON.parse(body);
    callback(null, data);
  });
};
const fetchISSFlyOverTimes = function (coords, callback) {
request(`https://iss-pass.herokuapp.com/json/?lat=43.64&lon=-79.4331`, (error, response, body) => {
    data = JSON.parse(body);
    console.log(data)
})
}
module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };


