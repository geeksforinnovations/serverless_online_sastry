module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.resolve()
            .then(() =>
                queryInterface.addColumn('Pujas', 'cost', {
                    type: Sequelize.FLOAT
                })
            )
    },

    down: function (queryInterface, Sequelize) {
        return [
            queryInterface.removeColumn('Pujas', 'cost')
        ];
    }
};