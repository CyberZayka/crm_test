const express = require("express");
const router = express.Router();

exports.getDescription = (req, res, next) => {
    res.send(require("../faker/fakeDescription").description)
}

router.get("/", this.getDescription)

module.exports = router