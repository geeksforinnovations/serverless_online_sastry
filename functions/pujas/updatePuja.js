const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
    try {
        const puja = JSON.parse(event.body);
        const updateddPuja = await dbModels.Puja
            .updateAttributes({
                name: puja.name,
                description: puja.description,
                about: puja.about, 
                timeInHrs: puja.timeInHrs, 
                requiredThings: puja.requiredThings
            },
            { where: { id: puja.id } });
        return helpers.success({ data: updateddPuja });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};