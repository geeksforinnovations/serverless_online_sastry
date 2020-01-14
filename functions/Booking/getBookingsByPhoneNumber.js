const dbModels = require("../../models");
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
    const phoneNumber = event.pathParameters.id;
    const bookings = await dbModels.Booking.findAll({      
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },      
      include: [
        {
          model: dbModels.Puja,
          required: true,
          attributes:['id', 'name', 'timeInHrs', 'pujaType', 'cost', 'imageId'],
          as: "puja"
        }
      ],
      where: {
        phoneNumber: phoneNumber
      }
    });
    return helpers.success({ data: bookings });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
};
