exports.handler = function(event, context, callback) {
    
    console.log('Node-testing.....')
    callback(null, {"message": "Successfully executed"});
}