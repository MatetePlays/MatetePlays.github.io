"use strict";

/**
 * Updates the time displayed on the webpage with the current time, UTC time, and UNIX time in milliseconds.
 *
 * @return {void} This function does not return a value.
 */
function updateTime() {
    let currentTime = new Date();
    let currentUTCTime = currentTime.toUTCString();
    let currentTimeMillis = currentTime.getTime();

    document.getElementById('date').innerHTML = currentTime;
    document.getElementById('date_utc').innerHTML = currentUTCTime;
    document.getElementById('date_ms').innerHTML = currentTimeMillis;
}

updateTime()
setInterval(updateTime, 1000); // Run updateTime() every 1 second.
