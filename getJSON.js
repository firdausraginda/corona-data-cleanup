const axios = require('axios');
var fs = require('fs');

urlTimeline = "https://thevirustracker.com/free-api?countryTimeline=ID"
urlTimeLineID = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/132?source=jhu&timelines=true"
urlTimeLineSG = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/196?source=jhu&timelines=true"
urlTimeLineVN = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/228?source=jhu&timelines=true"

axios.get(urlTimeLineVN)
  .then(function (response) {
    // handle success
    return response.data
  })
  .then(data => {
    fs.writeFile ("corona-data-timeline-VN.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  