'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Contacts', 'User_Id', 
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts', 'User_Id'
    );
  }
};
