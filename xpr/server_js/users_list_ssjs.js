//this is a "simple echo" JS script to demonstrate binding scripts to elements and datasources.

exports.process = function(context, options) {
    let api = require("/xpr/XprObjects/XprApi");
    let request = require("/xpr/XprObjects/XprWeb");
    
    /*let users_params = { per_page: 10 };
    if (request.urlParams.q) users_params.q_FirstName_LastName_Email = request.urlParams.q;
    if (request.urlParams.page) users_params.page = request.urlParams.page;
    let users = api.call({
        "uri" : "/users/",
        "params" : users_params
    });*/

    return request;
}
