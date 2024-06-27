const fs = require('fs');
const Papa = require('papaparse');

const csvFile = 'data.csv';
const jsonFile = 'data.json';

Papa.parse(fs.createReadStream(csvFile), {
  header: true,
  complete: (results) => {
    fs.writeFileSync(jsonFile, JSON.stringify(results.data, null, 2));
    console.log('JSON file generated successfully!');
  }
});
