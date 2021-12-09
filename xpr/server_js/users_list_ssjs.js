//this is a "simple echo" JS script to demonstrate binding scripts to elements and datasources.

exports.process = function(context, options) {
    var request = require("./XprObjects/WebRequest");
    let object = context.concat(options);
    return object;
}
