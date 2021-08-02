/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { DataTypes } = Sequelize;
        
		return queryInterface.createTable('users', {
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
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: new Date()
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: new Date()
			}
		});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	}
};
