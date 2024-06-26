import React from "react";
import Image from "next/image";
import Head from "next/head";
import HeaderLink from "@/components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { getProviders, signIn } from "next-auth/react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const home = ({ providers }) => {
  return (
    <>
      <div className="space-y-10 relative">
        <Head>
          <title>Workagram</title>
          <link rel="icon" href="/suitcase.ico" />
        </Head>
        <header className="flex justify-around items-center py-4">
          <div className="relative w-40 h-10">
            <Image src="/assets/logo.PNG" layout="fill" objectFit="contain" />
          </div>
          <div className="flex items-center sm:divide-x divide-gray-300">
            <div className="hidden sm:flex space-x-8 pr-4">
              <HeaderLink Icon={ExploreIcon} text="Discover" />
              <HeaderLink Icon={GroupIcon} text="People" />
              <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
              <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
            </div>

            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <div className="pl-4">
                  <button
                    className="text-amber-800/80 font-semibold rounded-full border border-amber-800/80 px-5 py-1.5 transition-all hover:border-2"
                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            ))}
          </div>
        </header>
        <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
          <div className="space-y-6 xl:space-y-10">
            <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
              Welcome to our professional community
            </h1>
            <div className="space-y-4">
              <div className="intent transition ease-in-out">
                <h2 className="text-xl">Search for a job</h2>
                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
              <div className="intent transition ease-in-out">
                <h2 className="text-xl">Find a person you know</h2>
                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
              <div className="intent transition ease-in-out">
                <h2 className="text-xl">Learn a new skill</h2>
                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
            </div>
          </div>

          <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[400px] top-19 right-5">
            <Image src="/assets/log.jpg" layout="fill" priority />
          </div>
        </main>
      </div>
    </>
  );
};

export default home;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
