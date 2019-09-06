const mongoose = require ("mongoose")


const sizeValidator = [
	function(value){
		return (value.length > 0 && value.length <= 50)
	},
	"Error, length must be between 1 an 50 chars long"
]

const teamMemberSchema = new mongoose.Schema({
    name: {type: String, required: true}
})

module.exports = mongoose.model("TeamMember", teamMemberSchema);