/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jugadors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ficha: {
        type: Sequelize.STRING,
      },
      colorPropiedades: {
        type: Sequelize.STRING,
      },
      cantidadPropiedades: {
        type: Sequelize.INTEGER,
      },
      dinero: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id' },
      },
      nombre: {
        type: Sequelize.STRING,
      },
      idJuego: {
        type: Sequelize.INTEGER,
        references: { model: 'Juegos', key: 'id' },
      },
      idTablero: {
        type: Sequelize.INTEGER,
        references: { model: 'Tableros', key: 'id' },
      },
      idCasilla: {
        type: Sequelize.INTEGER,
        references: { model: 'Casillas', key: 'id' },
      },
      turno: {
        type: Sequelize.INTEGER,

      },
      posicion: {
        type: Sequelize.INTEGER,

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
    await queryInterface.dropTable('Jugadors');
  },
};
