const Reply = require("./reply.model")
exports.create = ((req , res , next) => {
    const replie = new Reply(req.body)
    replie.save((err , replie) => {
        if(err){
            return next(err)
        }
        res.json(replie)
    })
})

exports.getAll = ((req , res , next) => {
    
    Reply.find((err , replie) => {
        if(err){
            return next(err)
        }
        res.json(replie)
    })
})

exports.getReply = ((req , res , next) => {
    Reply.find( {topic : req.params.topic},(err , replie) => {
        if(err){
            return next(err)
        }
        res.json(replie)
    })
})

exports.delete = ((req , res , next) => {
    Reply.findByIdAndRemove( {_id : req.params.reply},(err , replie) => {
        if(err){
            return next(err)
        }
        res.json(replie)
    })
})