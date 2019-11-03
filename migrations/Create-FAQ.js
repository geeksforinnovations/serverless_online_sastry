'use strict';
module.exports = {
        up: (queryInterface, Sequelize) => {
        return Promise.resolve()
            .then(() =>
                queryInterface.createTable('FAQ', {
                    id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: Sequelize.INTEGER
                    },
                    question: {
                        type: Sequelize.STRING
                    },
                    answer: {
                        type: Sequelize.JSON
                    },
                    createdAt: {
                        allowNull: false,
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                    },
                    updatedAt: {
                        allowNull: false,
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
                    }
                }));
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('FAQ');
    }
};