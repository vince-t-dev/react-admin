exports.process = function(context, options) {
    let api = require("XprObjects/Api");
    let request = require("XprObjects/WebRequest");

    let users = api.call({
        method: "GET",
        uri: "/users/",
        params: {
            "per_page": 10
        }
    });

    return users;
}
