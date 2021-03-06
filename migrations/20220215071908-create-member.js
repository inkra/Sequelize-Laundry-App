'use strict';
module.exports = {
 up: async (queryInterface, Sequelize) => {
 await queryInterface.createTable('member', {
 id_member: {
 allowNull: false,
 autoIncrement: true,
 primaryKey: true,
 type: Sequelize.INTEGER
 },
 nama_member: {
 type: Sequelize.STRING
 },
 alamat: {
 type: Sequelize.TEXT
 },
 jenis_kelamin: {
  type: Sequelize.ENUM('laki-laki', 'perempuan')
  },
 tlp: {
 type: Sequelize.STRING
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
 await queryInterface.dropTable('member');
 }
};