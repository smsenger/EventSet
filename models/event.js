'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    type: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.Contact, {foreignKey: 'Id'});
  };
  return Event;
};