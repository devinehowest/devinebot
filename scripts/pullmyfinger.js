'use strict';

const pull = res => {
  return res.send('as you wish, http://www.misternicehands.com/');
};

module.exports = (robot) => {

  robot.respond(/^finger$/i, res => {
    pull(res);
  });

  robot.respond(/^vinger$/i, res => {
    pull(res);
  });

};
