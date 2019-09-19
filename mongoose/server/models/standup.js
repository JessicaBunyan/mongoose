const mongoose = require("mongoose");



const requiredStringValidator = [
	function(val) {
		let testVal = val.trim();
		return testVal.length > 0;
	},
	"Please supply a value for {PATH}"
]

const standupSchema = new mongoose.Schema({
    teamMemberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teamMembers",
    },
    teamMember: {type: String, validate: requiredStringValidator},
    project: {type: String, validate: requiredStringValidator},
    workYesterday: {type: String, validate: requiredStringValidator},
    workToday: {type: String, validate: requiredStringValidator},
    impediments: {type: String, validate: requiredStringValidator},
    createdOn: {type: Date, default: Date.now}
})
 


module.exports = mongoose.model("Standup", standupSchema)

