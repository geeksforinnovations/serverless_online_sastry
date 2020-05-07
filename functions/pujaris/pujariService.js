const dbModels = require('../../models')



module.exports.createPujari = async (pujari) => {
  try {
    const createdPujari = await dbModels.Pujari
      .create({
        id: pujari.id, firstName: pujari.firstName, lastName: pujari.lastName,
        middleName: pujari.middleName, description: pujari.description,
        contactNo: pujari.contactNo, address1: pujari.address1,
        address2: pujari.address2, pujariType: pujari.pujariType,
        city: pujari.city,country: pujari.country, pujariTimeZone: pujari.pujariTimeZone,
        pujariActive: pujari.pujariActive,created_date: pujari.created_date, created_by: pujari.created_by,
        updated_date: pujari.updated_date,Last_updated_by: pujari.Last_updated_by
      });
    return createdPujari;

  } catch (error) {
    throw error
  }
}

module.exports.getAllPujaris = async () => {
    try {
      const pujari = await dbModels.Pujari
        .findAll({
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