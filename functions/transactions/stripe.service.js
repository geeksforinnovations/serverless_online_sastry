const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.pay = async (source, amount, description) => {
    try {
        const payment = await stripe.charges.create({
            source,
            amount: amount,
            description,
            currency: "usd"
        });
        return payment
    } catch (e) {
        throw e;
    }
}