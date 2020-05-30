'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.TEXT,
    address: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    Contact.belongsTo(models.User, {foreignKey: 'User_Id'});
    Contact.hasMany(models.Event, {foreignKey: 'Contact_Id'});
  };
  return Contact;
};