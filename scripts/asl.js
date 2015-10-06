'use strict';

let moment = require('moment');

module.exports = (robot) => {

  robot.respond(/asl/i, res => {

    let sex = 'R';
    let location = 'Kortrijk';

    let birth = '2014-10-05';

    let years = moment().diff(birth, 'years');
    let days = moment().diff(birth, 'days') % 365;

    if(days === 0){
      return res.send(`today is my birthday, I'm ${years} old`);
    }

    return res.send(`${years} years & ${days} day(s) / ${sex} / ${location}`);

  });

};
