const db = require("./db.js");
let date = new Date();
let timeString = date.toUTCString();
module.exports = function updateDBTime() {
    db.database().ref("TIMESTAMP").set({
      last_updated: timeString
    });
}
