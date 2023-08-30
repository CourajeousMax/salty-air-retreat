import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/Components/NavBar/NavBar";
import Header from "@/Components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Esmeralda's Salty Air Retreat</title>
      </Head>
      <NavBar />
      <Header />
    </>
  );
}
