const TeamMember = require("../../models/teamMember");

module.exports = function(router){
    router.get("/team", function(req, res){
        TeamMember.find()
            .sort({"name": 1})
            .exec()
            .then(docs => {
                res.status(200).json(docs);
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error finding Team member",
                    error: err
                })
            })
    })


    router.post("/team", function (req,res){
        console.log("in team conrtoller");
        const member = new TeamMember(res.body);
        member.save(function(err, note){
            if (err){
                res.status(400).json(err);
            }
            res.status(200).json(note);
        })
    })

}