const request = require("/xpr/request");
//exports.XprRequest = PHP.XprRequest;

function process(data) {
    
    return request.XprRequest();
}

exports.process = process;