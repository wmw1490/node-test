exports.handler = function(event, context, callback) {
    
    let bucketname = 's3-bucket-ww'
    let fname = 's3-fname'
    let fsize = 3409008
    let bsize = 4096
    blocks = fsize/bsize
    console.log('Node-testing.....' + bucketname + '/' + fname + ' Blocks: ' + blocks)
    callback(null, {"message": "Successfully executed"});
}