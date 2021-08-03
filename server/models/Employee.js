const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeScheme = new Schema({
    name: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    company: {
        type: String
    },
    phone: {
        type: String
    }
}, { strict: false })

employeeScheme.index({ "$**": "text" });

module.exports = Employee = mongoose.model("Employee", employeeScheme)