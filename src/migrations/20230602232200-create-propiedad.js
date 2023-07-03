/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Propiedads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idCasilla: {
        type: Sequelize.INTEGER,
        references: { model: 'Casillas', key: 'id' },
      },
      idJugador: {
        type: Sequelize.INTEGER,
        references: { model: 'Jugadors', key: 'id' },
      },
      color: {
        type: Sequelize.STRING,
      },
      precio: {
        type: Sequelize.INTEGER,
      },
      renta: {
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Propiedads');
  },
};
