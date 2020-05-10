const dbModels = require('../../models')



module.exports.createPujari_Review = async (pujari_review) => {
  try {
    const createPujari_Review = await dbModels.Pujari_reviews
      .create({
        id: pujari_review.id,reviewDate: pujari_review.reviewDate,rating: pujari_review.rating,
        review: pujari_review.review,userId: pujari_review.userId,pujariId: pujari_review.pujariId,
        pujaId: pujari_review.pujaId,visibleFlag:pujari_review.visibleFlag, bookingId:pujari_review.bookingId,
        created_date: pujari_review.created_date, created_by: pujari_review.created_by,
        updated_date: pujari_review.updated_date,Last_updated_by: pujari_review.Last_updated_by
      });
    return createPujari_Review;

  } catch (error) {
    throw error
  }
}

module.exports.getAllPujari_reviews = async () => {
    try {
      const pujari_review = await dbModels.Pujari_reviews
        .findAll({
          // include: [
          //   {
          //     model: dbModels.Pujari,
          //     required: true,
          //     // as: 'Pujari'
          //   }
          // ]
        });
      return pujari_review;
    } catch (error) {
      throw error
    }
  }


// sample payload
//   {
//     "pujariActive": 0
// }
  module.exports.updatePujari_Review= async (pujari_reviewId,pujari_review) => {
    try {
      const pujari_review = await dbModels.Pujari_reviews
        .update({reviewDate: pujari_review.reviewDate,rating: pujari_review.rating,
          review: pujari_review.review,userId: pujari_review.userId,pujariId: pujari_review.pujariId,
          pujaId: pujari_review.pujaId,
          created_date: pujari_review.created_date, created_by: pujari_review.created_by,
          updated_date: pujari_review.updated_date,Last_updated_by: pujari_review.Last_updated_by
      },
        {
          where: {
            id: pujari_reviewId
         }
        });
      return "updated";
    } catch (error) {
      throw error
    }
  }