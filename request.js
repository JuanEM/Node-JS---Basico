var request = require('request');
request('https://www.buda.com/api/v2/markets/btc-clp/volume.json', function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body);
});