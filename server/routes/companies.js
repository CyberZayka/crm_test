const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Company = require("../models/Company")

exports.getCompanies = (req, res, next) => {

    Company.find()
      .then(companies => {
       
        if(companies.length === 0) {
              const company = new Company(require("../faker/fakeCompanies"))

              company.save(err => {
                mongoose.disconnect()

                if(err) return console.log(err);

                res.send(company)
              })
        } 
        res.send(companies)
        
          
        })
      .catch(err =>
        res.status(400).json({
          message: `Error happened on server: "${err}" `
        })
      );
}

exports.removeCompany = (req, res, next) => {
  Company.deleteOne(req.body, (err, result) => {
    mongoose.disconnect()

    if(err) return console.log(err);

    console.log(result);
  })
}

router.delete("/", this.removeCompany)
router.get("/", this.getCompanies)

module.exports = router