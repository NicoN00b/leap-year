$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());

    var leapYear = function(year) {
      return false;
    };

    var result = leapYear(year);
    $("#result").text(result);
  });
});
