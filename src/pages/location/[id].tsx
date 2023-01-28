import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../../components/layout/header/header";
import { getLocation } from "../../__mocks__/locations";

const LocationIndex: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const location = getLocation(id);

  return (
    <>
      <Head>
        <title>booking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center px-4 py-16 ">
          {location && (
            <>
              <h1 className="text-2xl text-white mb-4">{location.name}</h1>
              <span className="text-base text-white">{location.address}</span>
            </>
          )}
          {!location && <span className="text-white">No location found.</span>}
        </div>
      </main>
    </>
  );
};

export default LocationIndex;
