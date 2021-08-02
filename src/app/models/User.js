import sequelize from '../../database/index.js';
import Sequelize from 'sequelize';

const { Model, DataTypes } = Sequelize;

class User extends Model {}

User.init({
	id: {
		type: DataTypes.INTEGER, 
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING(255),
		allowNull: false
	},
	email: {
		type: DataTypes.STRING(255),
		allowNull: false,
		unique: true
	},
	image: {
		type: DataTypes.TEXT(),
		defaultValue: 'https://www.vhv.rs/dpng/d/421-4213525_png-file-svg-single-user-icon-png-transparent.png',
		allowNull: false
	}
}, {
	sequelize,
	modelName: 'User'
});

export default User;