module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Usuarios', [
    {
      id: 0,
      username: 'trinigil',
      password: 'trini123',
      mail: 'mtgil@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 1,
      username: 'tereporzio',
      password: 'tere123',
      mail: 'mtporzio@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      username: 'borja12',
      password: 'borjap',
      mail: 'borja@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      username: 'maria122',
      password: 'maria2001',
      mail: 'soybacan@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Usuarios', null, {}),
};
