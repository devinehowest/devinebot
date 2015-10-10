'use strict';

let fetch = require('node-fetch');
let cheerio = require('cheerio');

let fs = require('fs');

const init = () => {
  fetch('http://www.w3schools.com/html/html_colorvalues.asp')
    .then(r => r.text())
    .then(parse);
};

const parse = html => {

  var obj = {
    colors: []
  };

  let $ = cheerio.load(html);
  let rows = $('tr');

  rows.each((i, row) => {
    let tds = $(row).find('td');
    let color = {};
    tds.each((i, td) => {
      if(i === 0) color.name = $(td).text().toLowerCase().trim();
      if(i === 1) color.hex = $(td).text().toLowerCase().trim();
    });
    if(!color.name || !color.hex) return;
    obj.colors.push(color);
  });

  //console.log(obj.colors.length);
  console.log(obj);

  fs.writeFileSync('./colors.json', JSON.stringify(obj, null, 2));

};

init();
