'use strict';

const geenprobleem = res => {

  let arr = [
    'Graag gedaan',
    'Het is niks',
    'Zonder dank',
    'Je zou hetzelfde voor mij doen'
  ];

  let rand = Math.round(Math.random() * (arr.length - 1));

  let name = res.message.user.name.charAt(0).toUpperCase()
    + res.message.user.name.toLowerCase().substring(1, res.message.user.name.length);

  return res.send(`${arr[rand]} ${name}`);

};

module.exports = robot => {

  robot.respond(/merci/i, res => {
    geenprobleem(res);
  });

  robot.respond(/dank/i, res => {
    geenprobleem(res);
  });

};
