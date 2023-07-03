module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Juegos', [
    {
      id: 0,
      ganador: null,
      numeroRondas: 15,
      turnoActual: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Juegos', null, {}),
};
