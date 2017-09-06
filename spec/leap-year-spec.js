var Calendar = require('./../js/scripts.js').testing;
describe('Calendar', function() {

  it('should calculate if year is a leap year', function(){
    var skin = 1996

    var something = Calendar(skin);
    console.log(something);

    expect(something).toEqual(true);
    // expect(year % 4)
    // ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0))
  });
});
