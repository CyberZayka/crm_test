const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companyScheme = new Schema({
    companyName: {
        type: String,
    },
    email: {
        type: String,
    },
    website: {
        type: String
    },
    logo: {
        type: String
    }
}, { strict: false })

companyScheme.index({ "$**": "text" });

module.exports = Company = mongoose.model("Company", companyScheme)