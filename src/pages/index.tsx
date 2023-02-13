import { type NextPage } from "next";
import Head from "next/head";
import { BookingForm } from "../components/booking/BookingForm";
import { Header } from "../components/layout/header/header";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>booking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            booking
          </h1>

          <BookingForm />
        </div>
      </main>
    </>
  );
};

export default Index;
