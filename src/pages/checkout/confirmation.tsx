import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/layout/header/header";

const CheckoutIndex: NextPage = () => {
  // @TODO: fetch confirmed booking ID for booking ref/information etc.
  return (
    <>
      <Head>
        <title>booking | Checkout | Confirmation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="my-6 mt-4 flex flex-col">
          <section>
            <h1 className="mt-5 mb-10 text-5xl font-extrabold tracking-tight text-white">
              Confirmed
            </h1>

            <div>
              <p className="text-white">{"You're going to Pimlico Academy."}</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default CheckoutIndex;
