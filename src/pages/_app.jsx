import "@/styles/globals.css";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Footer year={new Date().getFullYear()} name="Abdulatef selem" />
      <Navbar />
    </>
  );
}
