"use strict";
function processinput(abc) {
    abc("Hammad");
}
processinput(function (name) {
    console.log(`Name ${name}`);
});
