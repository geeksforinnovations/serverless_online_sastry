const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
    try {
        const appSettings = JSON.parse(event.body);;
        // var appSettings = {
        //     key: 'testKey', value: 'TestValue', type: 'String', displayName: 'TestDisplay'
        // };
        const createdBooking = await dbModels.AppSettings
            .create({
                key: appSettings.key,
                value: appSettings.value,
                type: appSettings.type,
                displayName: appSettings.displayName,


            });
        return helpers.success({ data: appSettings });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};