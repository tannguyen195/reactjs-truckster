import moment from 'moment'
import axios from 'axios';
import { Cookies } from 'react-cookie'
import CircularJSON from 'circular-json'
const cookies = new Cookies()
var https = require("https");
export function getSchedule(data) {
    let schudeles = []

    data.forEach(calendarItem => {

        switch (calendarItem.frequency && calendarItem.frequency.name) {
            case "ONCE": {
                schudeles.push({
                    ...calendarItem,
                    timeDisplay: calendarItem.end_time,
                    start: moment(calendarItem.end_time).toDate(),
                    end: moment(calendarItem.end_time).toDate()
                })
                break;
            }
            case "DAILY": {
                //Get day of pairing of the week
                let interval = calendarItem.interval ? calendarItem.interval : 1
                let repeated = calendarItem.times_repeated ? calendarItem.times_repeated : 100

                for (let i = 0; i < repeated; ++i) {
                    let tempDate = moment(calendarItem.end_time).add(i * interval, 'day'), tempDate1 = moment(calendarItem.start_time).add(i * interval, 'w')

                    schudeles.push({
                        ...calendarItem,
                        timeDisplay: tempDate.format("YYYY-MM-DD h:mm a"),
                        start: moment((tempDate1.format("YYYY-MM-DD h:mm a")), "YYYY-MM-DD h:mm a").toDate(),
                        end: moment((tempDate1.format("YYYY-MM-DD") + ' ' + moment(calendarItem.end_time).format("h:mm a")), "YYYY-MM-DD h:mm a").toDate()
                    })
                }

                break;

            }
            case "WEEKLY": {
                //Get day of pairing of the week
                let interval = calendarItem.interval ? calendarItem.interval : 1
                let repeated = calendarItem.times_repeated ? calendarItem.times_repeated : 100

                for (let i = 0; i < repeated; ++i) {
                    let tempDate = moment(calendarItem.end_time).add(i * interval, 'w'), tempDate1 = moment(calendarItem.start_time).add(i * interval, 'w')

                    schudeles.push({
                        ...calendarItem,
                        timeDisplay: tempDate.format("YYYY-MM-DD h:mm a"),
                        start: moment((tempDate1.format("YYYY-MM-DD h:mm a")), "YYYY-MM-DD h:mm a").toDate(),
                        end: moment((tempDate1.format("YYYY-MM-DD") + ' ' + moment(calendarItem.end_time).format("h:mm a")), "YYYY-MM-DD h:mm a").toDate()
                    })
                }

                break;
            }
            case "MONTHLY": {
                let interval = calendarItem.interval ? calendarItem.interval : 1
                let repeated = calendarItem.times_repeated ? calendarItem.times_repeated : 2000
                for (let j = 0; j < repeated; ++j) {
                    let tempDate = moment(calendarItem.end_time).add(j * interval, 'M'), tempDate1 = moment(calendarItem.start_time).add(j * interval, 'w')

                    schudeles.push({
                        ...calendarItem,
                        timeDisplay: tempDate.format("YYYY-MM-DD h:mm a"),
                        start: moment((tempDate1.format("YYYY-MM-DD h:mm a")), "YYYY-MM-DD h:mm a").toDate(),
                        end: moment((tempDate1.format("YYYY-MM-DD") + ' ' + moment(calendarItem.end_time).format("h:mm a")), "YYYY-MM-DD h:mm a").toDate()
                    })
                }

                break;
            }
            default: break;
        }
    })

    return schudeles
}


export function getEventTime(data) {
    let schudeles = []
    switch (data.frequency.name) {
        case "ONCE": {
            schudeles.push(
                data.end_time,
            )
            break;
        }
        case "DAILY": {
            let interval = data.interval ? data.interval : 1
            let repeated = data.times_repeated ? data.times_repeated : 100
            //Get day of pairing of the week

            for (let i = 0; i < repeated; ++i) {
                let tempDate = moment(data.end_time).add(i * interval, 'day')
                schudeles.push(
                    tempDate.format("YYYY-MM-DD h:mm a"))
            }

            break;
        }
        case "WEEKLY": {
            let interval = data.interval ? data.interval : 1
            let repeated = data.times_repeated ? data.times_repeated : 100
            //Get day of pairing of the week

            for (var i = 0; i < repeated; ++i) {
                let tempDate = moment(data.end_time).add(i * interval, 'w')

                schudeles.push(
                    tempDate.format("YYYY-MM-DD h:mm a"))
            }

            break;
        }
        case "MONTHLY": {

            let interval = data.interval ? data.interval : 1
            let repeated = data.times_repeated ? data.times_repeated : 100

            for (let j = 0; j < repeated; ++j) {
                let tempDate = moment(data.end_time).add(j * interval, 'M')

                schudeles.push(tempDate.format("YYYY-MM-DD h:mm a"))
            }
            break;
        }
        default: break;
    }

    return schudeles
}


export const getDataInitial = (url, token) => {
    let header = {
        "Accept": "application/json"
    }
    if (token) {
        header = {
            'Authorization': "Bearer " + token,
            "Accept": "application/json",
        }
    }
    return axios({
        method: 'get',
        url: "https://dev.gotruckster.com/api/" + url,
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        headers: header
    })
        .then(function (response) {
            return response.data
        })
        .catch(function (response) {
            return null
        });
}

export const getPageData = () => {
    return axios({
        method: 'get',
        url: `https://cms.gotruckster.com/wp-json/wp/v2/posts?per_page=20`,
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        headers: {
            "Accept": "application/json",
        }
    })
        .then(function (response) {
            return CircularJSON.stringify(response);
        })
        .catch(function (error) {
        });
}