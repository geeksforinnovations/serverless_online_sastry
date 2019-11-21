module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.resolve()
            .then(() =>
                queryInterface.addColumn('Pujas', 'pujaType', {
                  type:   Sequelize.ENUM,
                  values: ['Offline', 'Online', 'Both']
                })
            )
    },

    down: function (queryInterface, Sequelize) {
        return [
            queryInterface.removeColumn('Pujas', 'pujaType')
        ];
    }
};