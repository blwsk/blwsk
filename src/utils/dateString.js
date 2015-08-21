var dateString = function(unixTime) {
  // returns string in form 'Month Day, Year'

  var date = new Date(unixTime);

  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();

  var monthString;

  switch(month) {
    case 1:
      monthString = 'January';
      break;
    case 2:
      monthString = 'February';
      break;
    case 3:
      monthString = 'March';
      break;
    case 4:
      monthString = 'April';
      break;
    case 5:
      monthString = 'May';
      break;
    case 6:
      monthString = 'June';
      break;
    case 7:
      monthString = 'July';
      break;
    case 8:
      monthString = 'August';
      break;
    case 9:
      monthString = 'September';
      break;
    case 10:
      monthString = 'October';
      break;
    case 11:
      monthString = 'November';
      break;
    case 12:
      monthString = 'December';
      break;
    
  }

  return monthString + ' ' + day.toString() + ', ' + year.toString();

}

module.exports = dateString;