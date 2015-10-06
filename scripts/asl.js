'use strict';

let moment = require('moment');

module.exports = (robot) => {

  robot.respond(/asl/, res => {

    let sex = 'R';
    let location = 'Kortrijk';

    let birth = '2015-10-05';

    let years = moment().diff(birth, 'years');
    let days = moment().diff(birth, 'days');

    res.send(`${years} years & ${days} day(s) / ${sex} / ${location}`);

  });

};
