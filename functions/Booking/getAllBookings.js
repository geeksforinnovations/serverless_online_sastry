const dbModels = require('../../models')
const helpers = require("../../utils/helpers");


module.exports = async (event, context, callback) => {
  try {
    const bookings = await dbModels.Booking
      .findAll({
        include: [
          {
            model: dbModels.Puja,
            required: true,
            as: 'puja'
          }
        ]
      });
    return helpers.success({ data: bookings });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
};