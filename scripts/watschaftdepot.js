'use strict';

const menu = require(`../data/menu.js`);

const handler = res => {

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const found = menu.find(m => m.day === `${day}/${month}`);

  if(!found) return res.send('nothing found');
  else return res.send(`"${found.menu1}" & "${found.menu2}"`);

};


module.exports = robot => {

  robot.respond(/wat schaft de pot/i, handler);
  robot.respond(/menu/i, handler);

};
