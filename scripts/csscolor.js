'use strict';

let colors = require('../data/colors');

module.exports = robot => {

  robot.respond(/csscolor/i, res => {
    let color = colors[Math.round(Math.random() * (colors.length-1))];
    return res.send(`*${color.name}*   ${color.hex}`);
  });

};
