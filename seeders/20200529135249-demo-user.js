'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        username: 'Bob Ross',
        email: 'bobross@email.com',
        password: '$2b$10$3f1Y0snOll9k8jkCarK/AeVYAthdimfjPNdv8kIYeTr/bUoW.bIk6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Barbara Ross',
        email: 'barbaraross@email.com',
        password: '$2b$10$3f1Y0snOll9k8jkCarK/AeVYAthdimfjPNdv8kIYeTr/bUoW.bIk6',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], 
  {});
},

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
