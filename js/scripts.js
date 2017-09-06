// function Calendar(skinName) {
//   this.skin = skinName;
// }

function helloWorld(){
  return "hello world"
}
//what is the difference between a (named) function and a function expression in JS?

function leapYear (year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
  } else {
    return false;
  }
};

exports.testing = leapYear;
exports.calendarModule = leapYear;
