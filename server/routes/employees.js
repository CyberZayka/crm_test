const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Employee = require("../models/Employee")

exports.getEmployees = (req, res, next) => {

    Employee.find()
      .then(employees => {
          // if(employees) {
          //     const employee = new Employee(require("../faker/fakeEmployees"))

          //     employee.save(err => {
          //       mongoose.disconnect()

          //       if(err) return console.log(err);

          //     })
          //     res.send(employee)
          // }

        if(employees.length === 0) {
              const employee = new Employee(require("../faker/fakeEmployees"))

              employee.save(err => {
                mongoose.disconnect()

                if(err) return console.log(err);

              })

              res.send(employee)
        } 
        res.send(employees)
        

          
        })
      .catch(err =>
        res.status(400).json({
          message: `Error happened on server: "${err}" `
        })
      );
}

router.get("/", this.getEmployees)

module.exports = router