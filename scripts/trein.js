'use strict';

let fetch = require('node-fetch');

const getTrein = (station, res) => {

  let url = `http://api.irail.be/connections/?to=${station}&from=kortrijk&format=json`;

  fetch(url)
    .then(res => res.json())
    .then(data => {

      let departure = new Date(parseInt(data.connection[0].departure.time) * 1000);
      let arrival = new Date(parseInt(data.connection[0].arrival.time) * 1000);

      let vehicle = data.connection[0].departure.vehicle.split('.');
      let direction = data.connection[0].departure.direction.name;

      let answer = `(${vehicle[vehicle.length - 1]}, ${direction}) spoor ${data.connection[0].departure.platform}: ${departure.getHours()}:${departure.getMinutes()} -> ${arrival.getHours()}:${arrival.getMinutes()}`;

      return res.send(answer);

    });

}

module.exports = robot => {

  robot.hear(/trein/, res => {

    let name = res.message.user.name.toLowerCase();

    let obj = {
      capens: 'sint-niklaas',
      jynse: 'gent-sint-pieters',
      geoffrey: 'gentbrugge',
      shell: 'gentbrugge'
    };

    getTrein(obj[name], res);

  });

};
