'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Event_Finals', 'Contact_Id', 
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Contacts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Event_Finals', 'Contact_Id'
    );
  }
};
