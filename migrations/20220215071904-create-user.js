'use strict';
module.exports = {
 up: async (queryInterface, Sequelize) => {
 await queryInterface.createTable('user', {
 id_user: {
 allowNull: false,
 autoIncrement: true,
 primaryKey: true,
 type: Sequelize.INTEGER
 },
 nama_user: {
 type: Sequelize.STRING
 },
 username: {
 type: Sequelize.STRING
 },
 password: {
  type: Sequelize.STRING
  },
 role: {
  type: Sequelize.ENUM('admin', 'kasir', 'owner')
  },
  id_outlet: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
    model: "outlet",
    key: "id_outlet"
    }
    },
 createdAt: {
 allowNull: false,
 type: Sequelize.DATE
 },
 updatedAt: {
 allowNull: false,
 type: Sequelize.DATE
 }
 });
 },
 down: async (queryInterface, Sequelize) => {
 await queryInterface.dropTable('user');
 }
};