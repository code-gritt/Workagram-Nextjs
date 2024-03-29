import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Workagram</title>
        <link rel="icon" href="/suitcase.ico" />
      </Head>
      <Header />
    </div>
  );
}
