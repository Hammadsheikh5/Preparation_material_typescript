"use strict";
//expect boolean
function power(status) {
    if (status) {
        console.log("Light available");
    }
    else {
        console.log("power outage");
    }
}
power(true);
