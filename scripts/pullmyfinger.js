'use strict';

const pull = res => {
  return res.send('as you wish, http://www.misternicehands.com/');
};

module.exports = (robot) => {

  robot.respond(/pull my finger/i, res => {
    pull(res);
  });

  robot.respond(/trek eens aan m'n vinger/i, res => {
    pull(res);
  });

};
