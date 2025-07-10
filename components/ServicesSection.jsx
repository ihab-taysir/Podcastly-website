import { services } from "../constants/services";
import ServiceCard from "./ServicesCard";

export default function ServicesSection() {
  return (
    <section
      id="servises"
      dir="rtl"
      className="bg-background py-24 px-4 md:px-12"
    >
      <h2 className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-extrabold text-center leading-tight bg-gradient-to-br from-primary to-foreground text-transparent bg-clip-text mb-10 px-2 py-10">
        خدماتنا
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            content={service.content}
          />
        ))}
      </div>
    </section>
  );
}
