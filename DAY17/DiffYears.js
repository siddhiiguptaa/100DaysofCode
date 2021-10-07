// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Y
// our job is: Take the years and calculate the difference between them.

var howManyYears = function(date1, date2){
  return Math.abs(date1.split('/')[0] - date2.split('/')[0]);
}
