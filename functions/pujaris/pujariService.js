const dbModels = require('../../models')



module.exports.createPujari = async (pujari) => {
  try {
    const createdPujari = await dbModels.Pujari
      .create({
        id: pujari.id, firstName: pujari.firstName, lastName: pujari.lastName,
        middleName: pujari.middleName, description: pujari.description,
        contactNo: pujari.contactNo, address1: pujari.address1,
        address2: pujari.address2, pujariType: pujari.pujariType,
        city: pujari.city, country: pujari.country, pujariTimeZone: pujari.pujariTimeZone,
        pujariActive: pujari.pujariActive, created_date: pujari.created_date, created_by: pujari.created_by,
        updated_date: pujari.updated_date, Last_updated_by: pujari.Last_updated_by
      });
      console.log(createdPujari);
    return createdPujari;

  } catch (error) {
    throw error
  }
}

module.exports.getAllPujaris = async () => {
  try {
    const pujari = await dbModels.Pujari
      .findAll({
        attributes: [
          `id`, `firstName`, `lastName`, `middleName`, `description`, `contactNo`, `address1`, `address2`, `pujariType`, `city`, `country`, `pujariTimeZone`, `pujariActive`, `created_date`, `created_by`, `updated_date`, `Last_updated_by`
        ]
        // include: [
        //   {
        //     model: dbModels.Pujari,
        //     required: true,
        //     // as: 'Pujari'
        //   }
        // ]
      });
    return pujari;
  } catch (error) {
    throw error
  }
}

module.exports.getPujari = async (id) => {
  try {
    return await dbModels.Pujari.findOne({
        where: { id: id },
    });
} catch (error) {
    console.error('unable to get by id', error)
    throw error

}
}

// sample payload
//   {
//     "pujariActive": 0
// }
module.exports.updatePujari = async (pujariId, pujariData) => {
  try {
    const pujari = await dbModels.Pujari
      .update({
        pujariActive: pujariData.pujariActive,
        firstName: pujariData.firstName, description: pujariData.description,
        contactNo: pujariData.contactNo, address1: pujariData.address1,
        address2: pujariData.address2, pujariDataType: pujariData.pujariDataType,
        city: pujariData.city, country: pujariData.country, pujariDataTimeZone: pujariData.pujariDataTimeZone,
        updated_date: pujariData.updated_date, Last_updated_by: pujariData.Last_updated_by

      },
        {
          where: {
            id: pujariId
          }
        });
    return "updated";
  } catch (error) {
    throw error
  }
}