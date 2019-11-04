exports.handler = function(event, context, callback) {
    
    let bucketName = 's3-bucket-ww'
    let fileName = 's3-fname'
    let fsize = 3409008
    let bsize = 4096
    let blocks = fsize/bsize
    console.log('Node-testing.....' + bucketName + '/' + fileName + ' Blocks: ' + blocks)
    callback(null, {"message": "Successfully executed"});
}