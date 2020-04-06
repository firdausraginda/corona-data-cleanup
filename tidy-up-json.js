var jsonFile = require('./corona-data-timeline-ID.json')

dates = []
new_daily_cases = []
new_daily_deaths = []
new_daily_recoveries = []
total_cases = []

for (let [key, value] of Object.entries(jsonFile['timelineitems'][0])) {
    if (key != 'stat'){
        dates.push(key)
        total_cases.push(value['total_cases'])
        new_daily_cases.push(value['new_daily_cases'])
        new_daily_deaths.push(value['new_daily_deaths'])
        new_daily_recoveries.push(value['total_recoveries'])
    }
}

// hanlde daily recoveries
current = 0
for (let i=0; i<dates.length; i++){
    if (current - new_daily_recoveries[i] == 0){
        new_daily_recoveries[i] = 0
    }else{
        temp = new_daily_recoveries[i]
        new_daily_recoveries[i] = new_daily_recoveries[i] - current
        current = temp
    }
}

for (let i=0; i<dates.length; i++){
    // console.log(`${dates[i]}: ${new_daily_cases[i]}`)
    console.log(`${dates[i]}: ${total_cases[i]}`)
}
