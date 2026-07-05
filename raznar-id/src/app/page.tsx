import { AosInit } from "@/components/AosInit";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AosInit />
      <Header />
      <main id="main-content">
        <Hero />
        <Products />
        <Features />
        <Testimonials />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
