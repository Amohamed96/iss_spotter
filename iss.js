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

module.exports = { fetchMyIP };


