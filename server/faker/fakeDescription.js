const faker = require('faker');

const generateRandomDesc = amount => {
    const text = []

    for(let i = 0; i < amount; i++) {
        text.push(faker.lorem.text())
    }

    return text
}

module.exports = {
    description: generateRandomDesc(20)
}