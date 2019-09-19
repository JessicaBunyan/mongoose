const Standup = require("../../models/standup")
const mongoose = require("mongoose");

module.exports = function(router){
    router.get("/standup", function (req,res){
        Standup.find()
        .sort({'createdOn': 1})
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({
                message: "Error finding standups",
                error: err
            })
        })
        
    })

    router.get("/standup/:teamMemberId", function(req,res) {
        const query = {
            _teamMemberId: mongoose.Types.ObjectId(req.params.teamMemberId)
        }

        Standup.find(query)
            .sort({'createdOn': 1})
            .exec()
            .then(docs => {
                res.status(200).json(docs);
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error finding standups",
                    error: err
                })
            })
    });

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