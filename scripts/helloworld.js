module.exports = (robot) => {
  robot.hear(/hello/, res => res.reply('HELLO'));
};
