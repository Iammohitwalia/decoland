import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";

export default function About() {
  return (
    <>
      <Header />
      <InnerBanner
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <section className="container mx-auto px-6 py-10 text-center bg-white">
        <p className="text-black">Hi Welcome to the About page. Learn more about Cryptoverse.</p>
      </section>

      <Footer />
    </>
  );
}
