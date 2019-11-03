module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.resolve()
            .then(() =>
                queryInterface.addColumn('Pujas', 'cost', {
                    type: Sequelize.FLOAT
                }),
                queryInterface.addColumn('Pujas', 'avialableLanguages', {
                    type: Sequelize.JSON,
                })
            )
    },

    down: function (queryInterface, Sequelize) {
        return [
            queryInterface.removeColumn('Pujas', 'cost'),
            queryInterface.removeColumn('Pujas', 'avialableLanguagessequelize db:migrate')
        ];
    }
};