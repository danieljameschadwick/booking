import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../../components/layout/header/header";
import { getLocation } from "../../__mocks__/locations";

const LocationIndex: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const location = getLocation(id);

  // @TODO: custom error handling/layout - in app/
  if (!location) {
    return (
      <>
        <Head>
          <title>booking</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <div className="container flex flex-col items-center px-4 py-16 ">
            <span className="text-white">No location found.</span>
          </div>
        </main>
      </>
    );
  }

  const { name, address } = location;

  return (
    <>
      <Head>
        <title>booking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col mt-4">
          <h1 className="mb-4 text-2xl text-white">{name}</h1>
          <span className="text-base text-white">{address}</span>
        </div>
      </main>
    </>
  );
};

export default LocationIndex;
