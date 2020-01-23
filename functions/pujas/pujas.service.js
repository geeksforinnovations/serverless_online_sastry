const dbModels = require('../../models')

// get app pujas irrespective of any filters/ we can remove this in future
module.exports.getAllPujas = async function () {
    try {
        return await dbModels.Puja
            .findAll({
                include: [
                    {
                        model: dbModels.PujaLanguage,
                        attributes: ['LanguageId'],
                        required: true,
                        include: [
                            {
                                model: dbModels.Language,
                                attributes: ['name'],
                                required: true,

                            }],
                    }
                ]
            });
    } catch (error) {
        console.error("unable to fetch pujas", error)

    }
}

// search pujas with all filters
// phone number
// puja type
// language
module.exports.searchPujas = async function (queryParams) {
    try {
        return await dbModels.Puja.findAll({
            required: true,
            where:
            {
                [Sequelize.Op.and]: {
                    name: {
                        [Sequelize.Op.like]: (queryParams.pujaname == null ? '%' : '%' + queryParams.pujaname + '%')
                    },
                    pujaType: {
                        [Sequelize.Op.or]: queryParams.pujatype == "Both" ? [queryParams.pujatype] : [queryParams.pujatype, 'Both']
                    }
                }
            },
            include: [
                {
                    model: dbModels.PujaLanguage,
                    attributes: ['LanguageId'],
                    required: true,
                    include: [
                        {
                            model: dbModels.Language,
                            attributes: ['name'],
                            required: true,
                            where:
                            {
                                [Sequelize.Op.and]: {
                                    name: {
                                        [Sequelize.Op.like]: (queryParams.languagename == null ? '%' : '%' + queryParams.languagename + '%')
                                    }
                                }
                            },
                        }],
                }
            ]
        });
    } catch (error) {
        console.error("unable to search pujas", error)
    }
}

// get puja by ID
module.exports.getById = async function (id) {
    try {
        return await dbModels.Puja.findOne({
            where: { id: id },
            include: [
                {
                    model: dbModels.PujaLanguage,
                    attributes: ['LanguageId'],
                    required: true,
                    include: [
                        {
                            model: dbModels.Language,
                            attributes: ['name'],
                            required: true,
                        }
                    ]
                }
            ]
        });
    } catch (error) {
        console.error('unable to get by id', error)
        throw error

    }
}

//  creating a puja along with languages assossiation
module.exports.createPuja = async function (puja, languages) {
    try {
        return await dbModels.Puja
            .create(puja,
                {
                    include: [{
                        association: languages,
                        as: 'languages'
                    }]
                });
    } catch (error) {
        console.error("unable to create puja", error)
        throw error
    }
}

// permenant delete of record
module.exports.deletePuja = async function (id) {
    try {
        return await dbModels.Puja
            .destroy({ where: { id: id } });
    } catch (error) {
        console.error("unable to delete puja", error)
        throw error
    }
}


// update puja with complete attributes/ TODO: need to change only passed paras
module.exports.updatePuja = async function (puja) {
    try {
        return await dbModels.Puja
            .updateAttributes({
                name: puja.name,
                description: puja.description,
                about: puja.about,
                timeInHrs: puja.timeInHrs,
                requiredThings: puja.requiredThings
            },
                { where: { id: puja.id } });
    } catch (error) {
        console.error('unable to update puja', error)
        throw error

    }
}

