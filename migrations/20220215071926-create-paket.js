'use strict';
module.exports = {
 up: async (queryInterface, Sequelize) => {
 await queryInterface.createTable('paket', {
 id_paket: {
 allowNull: false,
 autoIncrement: true,
 primaryKey: true,
 type: Sequelize.INTEGER
 },
 id_outlet: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
    model: "outlet",
    key: "id_outlet"
    }
    },
 jenis: {
 type: Sequelize.ENUM('kiloan', 'selimut', 'bed_cover', 'lain')
 },
 nama_paket: {
 type: Sequelize.STRING
 },
 harga: {
 type: Sequelize.INTEGER
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
 await queryInterface.dropTable('paket');
 }
};