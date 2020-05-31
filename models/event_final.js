'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event_Final = sequelize.define('Event_Final', {
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TEXT
  }, {});
  Event_Final.associate = function(models) {
    Event_Final.belongsTo(models.Contact, {foreignKey: 'Contact_Id'});
    // associations can be defined here
  };
  return Event_Final;
};
