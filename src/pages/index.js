import Head from "next/head";
import { Inter } from "next/font/google";
import NavBar from "@/Components/NavBar/NavBar";
import Header from "@/Components/Header/Header";
import Main from "@/Components/Main/Main";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Esmeralda's Salty Air Retreat</title>
      </Head>
      <Header />
      <Main />
    </>
  );
}
