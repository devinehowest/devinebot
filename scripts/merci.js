'use strict';

const geenprobleem = res => {

  let arr = [
    'Graag gedaan',
    'Het is niks',
    'Zonder dank',
    'Je zou hetzelfde voor mij doen'
  ];

  let rand = Math.round(Math.random() * (arr.length - 1));

  console.log(rand);

  let name = res.message.user.name.charAt(0).toUpperCase()
    + res.message.user.name.toLowerCase().substring(1, res.message.user.name.length);

  return res.send(`${arr[rand]} ${name}`);

};

module.exports = robot => {

  robot.hear(/merci/i, res => {
    geenprobleem(res);
  });

  robot.hear(/bedankt/i, res => {
    geenprobleem(res);
  });

  robot.hear(/dank/i, res => {
    geenprobleem(res);
  });

};
