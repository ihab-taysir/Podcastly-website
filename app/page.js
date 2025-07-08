import AboutSection from "@components/AboutSection";
import ContactSection from "@components/ContactSection";
import HeroSection from "@components/HeroSection";
import ServicesSection from "@components/ServicesSection";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // notFound();
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
