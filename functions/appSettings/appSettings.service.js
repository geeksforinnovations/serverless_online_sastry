const dbModels = require('../../models')

module.exports.createSetting = function (appSettings) {
    try {
        const createdSetting = await dbModels.AppSettings
            .create({
                key: appSettings.key,
                value: appSettings.value,
                type: appSettings.type,
                displayName: appSettings.displayName,
            });
        return createdSetting
    } catch (error) {
        console.error('unable to create app setting')

    }
}

module.exports.deleteSetting = function (id) {
    try {
        const isDeleted = await dbModels.AppSettings
            .destroy({
                where: { id: id }
            });
        return isDeleted;
    } catch (error) {
        console.error('unable to delete setting')

    }

}

module.exports.getAllSettings = function () {
    try {
        return appSettingsList = await dbModels.AppSettings
            .findAll();

    } catch (error) {
        console.error("unable to fetch all settings")
    }
}

module.exports.getByKey = function (keyName) {
    try {
        const appSettingsList = await dbModels.AppSettings
            .findAll(
                {
                    where: {
                        key: keyName
                    }
                }
            );
    } catch (error) {
        console.error("unable to get setting by key")

    }

}

module.exports.updateKey =  function(appSettings) {
    try {
        const isUpdated = await dbModels.AppSettings
        .update({
            key: appSettings.key,
            value: appSettings.value,
            type: appSettings.type,
            displayName: appSettings.displayName
        },{ where : { id: appSettings.id } });
    } catch (error) {
        
    }
} 