'use strict';
require('babel-core/register');

function trimString(str) {
  return str;
}

function parseSchedule(str) {
  var state = 'CONTENT';

  var schedule = {};

  var timeString = '';
  var contentString = '';

  var i = 0;
  var current = str[i];
  while (i < str.length) {
    //console.log(current, i);

    switch(state) {
      case 'TIME':
        if (current == ']') {
          state = 'CONTENT';
        }
        else {
          timeString += current;
        }
        break;

      case 'CONTENT':
        if (current == '[') {
          state = 'TIME';
          // add key/value pair into schedule
          if (timeString != '') {
            schedule[timeString.toString()] = trimString(contentString);
          }
          // reset strings
          timeString = '';
          contentString = '';
        }
        else {
          contentString += current;
        }
        break;
    }

    current = str[++i];
  }

  // add final key/value pair into schedule
  if (timeString != '') {
    schedule[timeString.toString()] = trimString(contentString);
  }

  // test:
  // parseSchedule('[5am] eat [2pm] cook');
}

module.exports = {
  parseSchedule: parseSchedule
}