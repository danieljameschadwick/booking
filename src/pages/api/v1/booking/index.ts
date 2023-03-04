import { prisma } from '../../../../server/db';

// @TODO: move to tRPC
//   tRPC will provide validation built in
export default async function handler(req, res) {
  const bookingPayload = JSON.parse(req.body);
  const booking = await prisma.booking.create({
    data: bookingPayload
  });

  res.send(booking);
};
