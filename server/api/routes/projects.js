const Project = require("../../models/project")

module.exports = function(router){
    router.get("/projects", function (req,res){
        const project = new Project(req.body);
        project.save(function(err, note){
            if (err){
                res.status(400).json(err);
            }
            res.status(200).json(note);
        })
    })
}