const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const calculateOrderAmount = (location) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client

  // fetch timeslot price here

  return 1400;
};

export default async function handler(req, res) {
  const { booking } = req.body;
  const { details, location } = booking;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(location),
    currency: "gbp", // @TODO: hardcoded
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      // @TODO: pass booking to a formatMetadata() function
      //   and we can return as:
      //      location_id: <>
      //      details_customerId: <>
      //      details_fullName: <> 
      //      details_email: <>
      ...details,
      ...location,
    },
  });

  // @TODO: create booking object, store payment clientSecret against it

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
