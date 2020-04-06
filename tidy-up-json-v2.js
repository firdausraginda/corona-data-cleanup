var jsonFile = require('./corona-data-timeline-VN.json')
const createCsvWriter = require('csv-writer').createObjectCsvWriter

function getDailyNumber(value){
    let current = 0
    for (let i=0; i<value.length; i++){
        if (current - value[i] == 0){
            value[i] = 0
        }else{
            temp = value[i]
            value[i] = value[i] - current
            current = temp
        }
    }
    return value
}

dates = []
new_daily_cases = []
total_cases = []
new_daily_deaths = []
total_deaths = []

for (let [key, value] of Object.entries(jsonFile['location']['timelines']['confirmed']['timeline'])) {
    if (key != 'stat'){
        dates.push(key.substr(0,10))
        total_cases.push(value)
        new_daily_cases.push(value)
    }
}

for (let [key, value] of Object.entries(jsonFile['location']['timelines']['deaths']['timeline'])) {
    if (key != 'stat'){
        total_deaths.push(value)
        new_daily_deaths.push(value)
    }
}

new_daily_cases = getDailyNumber(new_daily_cases)
new_daily_deaths = getDailyNumber(new_daily_deaths)

resultJson = []
perObj = {}
for (let i=0; i<dates.length; i++){
    // console.log(`${dates_cases[i]}: ${new_daily_cases[i]}`)
    perObj['date'] = dates[i]
    perObj['daily_cases'] = new_daily_cases[i]
    perObj['total_cases'] = total_cases[i]
    perObj['daily_deaths'] = new_daily_deaths[i]
    perObj['total_deaths'] = total_deaths[i]
    resultJson.push(perObj)
    perObj = {}
}

// console.log(resultJson);

const csvWriter = createCsvWriter({
    path: 'corona-data-VN.csv',
    header: [
        {id: 'date', title: 'Date'},
        {id: 'daily_cases', title: 'Daily Cases'},
        {id: 'total_cases', title: 'Total Cases'},
        {id: 'daily_deaths', title: 'Daily Deaths'},
        {id: 'total_deaths', title: 'Total Deaths'}
    ]
})

csvWriter
    .writeRecords(resultJson)
    .then(()=> console.log('The CSV file was written successfully'));  