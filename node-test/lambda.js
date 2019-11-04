exports.handler = function(event, context, callback) {
    
    let bucketname = 's3-bucket-ww'
    let fname = 's3-fname'
    console.log('Node-testing.....' + bucketname + '/' + fname)
    callback(null, {"message": "Successfully executed"});
}