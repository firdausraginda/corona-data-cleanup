const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'cases.xlsx',
  header: [
    {id: 'date', title: 'Date'},
    {id: 'daily', title: 'Daily'},
    {id: 'total', title: 'Total'}
  ]
});

const data = [
    {
      name: 'John',
      surname: 'Snow',
      age: 26,
      gender: 'M'
    }, {
      name: 'Clair',
      surname: 'White',
      age: 33,
      gender: 'F',
    }, {
      name: 'Fancy',
      surname: 'Brown',
      age: 78,
      gender: 'F'
    }
  ];
  
  csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));