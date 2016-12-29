var moment = require('moment')

var data = [
  { "id":1,"name":"Malik","created_at":"2016-06-15 12:17:25" },
  { "id":2,"name":"Aliyah", "created_at":"2016-04-23 16:46:46"},
  { "id":3,"name":"Sarah","created_at":"2016-10-29 13:15:41"}
];

var convertCreatedAt = function (data) {
  // create array of created_at values
  var createdAtValues = [];
  for (var i = 0; i < data.length; i++) {
    createdAtValues.push(data[i].created_at);
  }

  createdAtValues = createdAtValues.sort();
  var output = [];
  var minDate = (new Date(createdAtValues[0])).getTime();
  var maxDate = (new Date(createdAtValues[createdAtValues.length-1])).getTime();
  var increment = (maxDate - minDate)/(createdAtValues.length-1);
  var datesArray = [];

  var i = minDate;
  while (i <= maxDate) {
    datesArray.push(i)
    i = i + increment;
  }
  // iterate through dates in datesArray
  for (var i = 0; i < datesArray.length; i++) {
    // count number created_at values less than date
    var j = 0;
    while ((new Date(createdAtValues[j])).getTime() < datesArray[i]) {
      j++;
    }
    output[i] = j;
  }

  var wordTimeArray = []
  datesArray.forEach(function(number) {
    wordTimeArray.push(moment(number).format("MMM Do YY"))
  })

  return {xVals: wordTimeArray, yVals: output};
}

console.log(convertCreatedAt(data))