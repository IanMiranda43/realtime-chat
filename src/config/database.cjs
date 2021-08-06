/* eslint-disable no-undef */
require('dotenv/config');

module.exports = {
	'development': {
		'host': process.env.DB_HOST_DEV,
		'port': process.env.DB_PORT_DEV,
		'username': process.env.DB_USER_DEV,
		'password': process.env.DB_PASS_DEV,
		'database': process.env.DB_DATABASE_DEV,
		'dialect': 'mysql',
		'logging': false
	},
	'production': {
		'host': process.env.DB_HOST_PROD,
		'port': process.env.DB_PORT_PROD,
		'username': process.env.DB_USER_PROD,
		'password': process.env.DB_PASS_PROD,
		'database': process.env.DB_DATABASE_PROD,
		'dialect': 'mysql',
		'logging': false
	}
};
