var LCLibrary = require('../lib/luckycharms-library.js');

var options = {
  url: 'http://luckycharms.dev/',
  api_key: 'fVIT+F3Kh/kFU1zlyM0f1Q=='
}

var Client = LCLibrary(options);

// Get all the units
Client.ListUnits(function(data){
  console.log(data);
});

// Update a units current url
Client.UpdateUnitUrl('unit-1', 'http://google.com', function(data){
  console.log(data);
});

