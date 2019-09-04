const Project = require("../../models/project")

module.exports = function(router){
    router.get("/projects", function(req, res){
        Project.find({isActive: {$eq: true}})
            .sort({"name": 1})
            .exec()
            .then(docs => {
                res.status(200).json(docs);
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error finding Project",
                    error: err
                })
            })
    })

    router.post("/projects", function (req,res){
        const project = new Project(req.body);
        project.save(function(err, note){
            if (err){
                res.status(400).json(err);
            }
            res.status(200).json(note);
        })
    })
}