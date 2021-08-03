
const faker = require('faker');

const makeFakeCompany = amount => {
    const company = []

    for(let i = 0; i < amount; i++) {
        company.push({
            companyName: faker.company.companyName(),
            mail: faker.internet.email(),
            website: faker.internet.domainName(),
            // logo: faker.internet.avatar()
        })
    }

    return company
}

module.exports = {
    company: makeFakeCompany(100)
}