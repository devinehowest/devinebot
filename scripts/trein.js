'use strict';

let fetch = require('node-fetch');

module.exports = robot => {

  robot.hear(/trein (.*)/, res => {

    let station = res.match[1];
    let url = `http://api.irail.be/connections/?to=${station}&from=kortrijk&format=json`;

    fetch(url)
      .then(res => res.json())
      .then(data => {

        let departure = new Date(parseInt(data.connection[0].departure.time) * 1000);
        let arrival = new Date(parseInt(data.connection[0].arrival.time) * 1000);

        let answer = `vertrek op spoor ${data.connection[0].departure.platform} om ${departure.getHours()}:${departure.getMinutes()} aankomst om ${arrival.getHours()}:${arrival.getMinutes()}`;

        return res.send(answer);

      });

  });

};
