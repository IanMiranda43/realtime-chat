import process from 'process';
import Sequelize from 'sequelize';
import databaseConfig from '../config/database.cjs';

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(databaseConfig[env]);

async function testConnection() {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

testConnection();

export default sequelize;