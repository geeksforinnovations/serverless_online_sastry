const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
    try {
        const isCancelled = await dbModels.Booking
            .update({status:'Cancelled'},{ where: { id:  event.pathParameters.id} });
        return helpers.success({ data: isCancelled });
    } catch (error) {
        return helpers.failure({message: error.message});
    }
};