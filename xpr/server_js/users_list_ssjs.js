const request = require("/xpr/XprRequest");
//exports.XprRequest = PHP.XprRequest;

function process(data) {
    
    return request.XprRequest();
}

exports.process = process;