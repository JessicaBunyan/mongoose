const mongoose = require("mongoose")


const addressSchema = new mongoose.Schema({
    type: String,
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: String
})

const customerSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    address: [addressSchema],
    createdOn: {type: Date, default: Date.now},
    isActive: {type: Boolean, default: true}
})


let Customer = mongoose.model("Customer", customerSchema)