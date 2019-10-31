const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
    try {
       var delObj = JSON.parse(event.queryStringParameters);
        const isDeleted = await dbModels.Puja
            .destroy({ where: { id: delObj.id } });
        return helpers.success({ data: isDeleted });
        callback(null, x)
    } catch (error) {
        return helpers.failure({ message: error.message
         });
    }
};