module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Tableros', [
    {
      id: 0,
      idJuego: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Tableros', null, {}),
};
