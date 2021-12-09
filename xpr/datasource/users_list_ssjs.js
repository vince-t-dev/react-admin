//this is a "simple echo" JS script to demonstrate binding scripts to elements and datasources.

exports.process = function(context, options) {
    let object = context.concat(options);
    return object;
}
