'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    dateFormatted: {
      type: DataTypes.VIRTUAL,
      get() {
        const year = this.date.getFullYear();
        let month = this.date.getMonth() + 1;
        let day = this.date.getDate();
        if (month < 10) {
          month = '0' + month;
        };
        if (day < 10) {
          day = '0' + day;
        }
        return `${month}-${day}-${year}`;
      }
    },
    timeFormatted : {
      type: DataTypes.VIRTUAL,
      get() {
        let hour = this.date.getHours();
        let minute = this.date.getMinutes();
        let suffix = 'a.m.';
        if (hour == 0) {
          hour = 12;
        } 
        else if (hour > 12) {
          hour = hour - 12;
          suffix = 'p.m.';
        }
        if (minute < 10) {
          minute = '0' + minute;
        }
        return `${hour}:${minute} ${suffix}`
      }
    },
    timeFieldValue : {
      type: DataTypes.VIRTUAL,
      get() {
        let hour = this.date.getHours();
        let minute = this.date.getMinutes();
        if (hour < 10) {
          hour = '0' + hour;
        } 
        if (minute < 10) {
          minute = '0' + minute;
        }
        return `${hour}:${minute}`
      }
    }
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.Contact, {foreignKey: {name: 'Contact_Id', allowNull: true}});
    Event.belongsTo(models.User, {foreignKey: 'User_Id'});
  };
  return Event;
};