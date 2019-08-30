const mongoose = require ("mongoose")

const teamMemberSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model("TeamMember", teamMemberSchema);