const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const helpers = require("../../utils/helpers");

module.exports = async (event, context) => {
    const body = JSON.parse(event.body);
    const storage = body.storage;
    const source = body.source
    const amount = helpers.calculateCost(storage);
    const description = "Scratch charge";


    try {
        const customer = await stripe.charges.create({
            source,
            amount,
            description,
            currency: "usd"
        });
        console.log('details',customer)
        return helpers.success({ data: customer });
    } catch (e) {
        return helpers.failure({ message: e.message });
    }
}


