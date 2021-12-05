var api = require("XprObjects/Api");
var request = require("XprObjects/WebRequest");

exports.process = function(context, options) {
    var users = api.call({
        method: "GET",
        uri: "/users/",
        params: {
            "per_page": 10
        }
    });

    return users;
}
