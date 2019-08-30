const Standup = require("../../models/standup")

module.exports = function(router){
    // router.get("/standup", function (req,res){
        
    // })
    console.log("binding standup routes");

    router.post("/standup", function(req,res){
        console.log("in post to /standup");
        let note = new Standup(req.body)
        note.save(function(err, note){
            if (err){
                res.status(400).json(err);
            }
            res.status(200).json(note);
        })
    });
}