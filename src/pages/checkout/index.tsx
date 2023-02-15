import { type NextPage } from "next";
import Head from "next/head";
import { Checkout } from "../../components/checkout/Checkout";
import { Header } from "../../components/layout/header/header";
import { BookingProvider } from "../../state/booking";
import NoSSRWrapper from "../../utils/NoSSRWrapper";

const CheckoutIndex: NextPage = () => {
  return (
    <>
      <Head>
        <title>booking | Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="my-6 mt-4 flex flex-col">
          {/* // @TODO: should we move this globally? or keep localised for performance */}
          <BookingProvider>
            <NoSSRWrapper>
              <Checkout />
            </NoSSRWrapper>
          </BookingProvider>
        </div>
      </main>
    </>
  );
};

export default CheckoutIndex;
