import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";

export default function Contact() {
  return (
    <>
      <Header />
      <InnerBanner
        title="Contact US"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

     
      <Footer />
    </>
  );
}
