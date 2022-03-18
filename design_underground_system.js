
var UndergroundSystem = function() {
    this.departingTrip = {};
    this.averageValues = {};
    this.cityIds = {};
    this.id = 0;
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.departingTrip[id] = [stationName, t];
    if(this.cityIds[stationName] === undefined) {
        this.cityIds[stationName] = this.id;
        this.id++;
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    if(this.cityIds[stationName] === undefined) {
        this.cityIds[stationName] = this.id;
        this.id++;
    }
    let departureCity = this.departingTrip[id][0]; // string
    let departureID = this.cityIds[departureCity];
    let arrivalID = this.cityIds[stationName];
    let departureTime = this.departingTrip[id][1];
    let timeElapsed = t - departureTime;
    let generateKey = (departureID * arrivalID + 12) * 7;
    if(this.averageValues[`${generateKey}`] === undefined){
        this.averageValues[`${generateKey}`] = [timeElapsed];
    } else {
        this.averageValues[`${generateKey}`].push(timeElapsed);
    }
    
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let departureID = this.cityIds[startStation];
    let arrivalID = this.cityIds[endStation];
    let generateKey = (departureID * arrivalID + 12) * 7;
    let times = this.averageValues[`${generateKey}`];
    // let count = times.length;
    let sum = 0;
    for(let i = 0; i < times.length; i++){
        sum += times[i];
    }
    return sum/times.length;
};


// VERSION 2 


var UndergroundSystem = function() {
    this.trips = {};
    this.times = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.trips[id] = {};
    this.trips[id]['check-in'] = {departureStationName: stationName, t: t}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    // this.trips[id]['check-out'] = {arrivalStationName: stationName, t: t};
    let departureCity = this.trips[id]['check-in']['departureStationName'];
    let travelTime = t - this.trips[id]['check-in']['t']; // one trip (for id) length
    if(this.times[`${departureCity}-${stationName}`] === undefined) {
        this.times[`${departureCity}-${stationName}`] = [];
    }
    this.times[`${departureCity}-${stationName}`].push(travelTime); 
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let tripTimes = this.times[`${startStation}-${endStation}`];
    let tripCount = tripTimes.length;
    let sum = 0;
    for(let i = 0; i < tripTimes.length; i++){
        sum += tripTimes[i];
    }
    return sum/tripCount;
};