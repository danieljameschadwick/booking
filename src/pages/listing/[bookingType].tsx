import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { SportListing } from "../../components/booking/listing/SportListing";
import { Header } from "../../components/layout/header/header";
import { BOOKING_TYPE } from "../../constants/bookingType";

const LIST_COMPONENT = {
  [BOOKING_TYPE.SPORT]: <SportListing />,
};

const Listing: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  const bookingType = router.query.bookingType as string;

  // rudimentary mapping for booking type
  // maybe even return React.createElement(BOOKING_FORM[type]), but use SportForm?
  const listing = LIST_COMPONENT[bookingType];

  return (
    <>
      <Head>
        <title>booking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
          {listing && listing}
        </div>
      </main>
    </>
  );
};

export default Listing;
