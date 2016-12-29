# created-at-data-converter

You want to see how your users have grown over time. The best way to represent is like:

<p align="center">
  <br />
  <img src="https://candicelaw.files.wordpress.com/2012/02/facebook-user-growth-july-2011-630w.jpg"/>
</p>

You need to convert your user data (that has a created_at field) into:

- regularly spaced time intervals going from the smallest created_at value to the largest created_at value. This will be your x-axis data.
- a cumulative frequency data set that counts how many users were present at a given point in time.

That is what the created-at-data-converter function does!

## Installation & use

`
npm install created-at-converter --save
`

Import created-at-converter into your javascript file:

`
var converterFunction = require('created-at-converter')
`

You can then use the converterFunction:

`
cumulativeCreatedAtData = converterFunction(data)
`

## Input data format

Input data must be an array of objects. Each object must have a created_at entry e.g.

`
var data = [
  { "id":1,"name":"Malik","created_at":"2016-06-15 12:17:25" },
  { "id":2,"name":"Aliyah", "created_at":"2016-04-23 16:46:46"},
  { "id":3,"name":"Sarah","created_at":"2016-10-29 13:15:41"}
];
`

## Output data format

After calling cumulativeCreatedAtData like so

`converterFunction(data)`

Your output will look like:

`
{
  xVals: [ 'Apr 23rd 16', 'Jul 27th 16', 'Oct 29th 16' ], 
  yVals: [ 0, 2, 2 ] 
 }
`

- The xVals are equally spaced time intervals going from the earliest created_at to the biggest created_at.
- The yVals represent how many user accounts had been created at that point in time.



