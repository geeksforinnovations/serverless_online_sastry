'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pujas', [{
      name: 'puja1',
      description: 'puja1',
      about: 'puja1',
      timeInHrs: 1.2,
      requiredThings: JSON.stringify( { 'hello': 'sd' })
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Pujas', null, {});

  }
};
