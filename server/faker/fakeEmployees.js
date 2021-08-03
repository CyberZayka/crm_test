

const faker = require('faker');


const makeFakeEmployees = amount => {
    const employee = []

    for(let i = 0; i < amount; i++) {
        employee.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            company: faker.company.companyName(),
            mail: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            logo: faker.internet.avatar()
        })
    }

    return employee
}


module.exports = {
    employee: makeFakeEmployees(100)
}