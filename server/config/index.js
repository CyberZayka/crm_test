const dotenv = require("dotenv");

const environment = dotenv.config();

if (!environment) {
	throw new Error('.env can not be found!');
}

module.exports = {
	PORT: process.env.PORT || 5000,
	MONGO_URI: process.env.MONGO_URI,
	JWT_SECRET: process.env.JWT_SECRET,
	MAILGUN_KEY: process.env.MAILGUN_KEY,
	MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN
};
