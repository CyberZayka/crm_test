const express = require("express");
const router = express.Router();

exports.getLogo = (req, res, next) => {
    res.send(require("../faker/fakeLogo").logo)
}

router.get("/", this.getLogo)

module.exports = router