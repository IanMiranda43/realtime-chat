/* eslint-disable no-undef */
require('dotenv/config');
const path = require('path');

module.exports = {
	'development': {
		'storage': path.resolve('src', 'database', 'database.sqlite'),
		'dialect': 'sqlite',
		'logging': false
	},
	'production': {
		'host': process.env.DB_HOST_PROD,
		'port': process.env.DB_PORT_PROD,
		'username': process.env.DB_USER_PROD,
		'password': process.env.DB_PASS_PROD,
		'database': 'real_time_chat',
		'dialect': 'mysql',
		'logging': false
	}
};
