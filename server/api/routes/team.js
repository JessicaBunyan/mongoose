module.exports = function(router){
    router.get("/team", function (req,res){
        console.log("in team conrtoller");
        res.send("testdata");
    })
}