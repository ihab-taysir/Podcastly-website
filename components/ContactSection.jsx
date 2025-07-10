import Iphone from "./Iphone";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      dir="rtl"
      className="bg-background py-24 px-4 md:px-12"
    >
      <h2 className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-extrabold text-center leading-tight bg-gradient-to-br from-primary to-foreground text-transparent bg-clip-text mb-10 px-2 py-10">
        تواصل معنا
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Right Side - Text */}
        <div className="space-y-6 text-foreground">
          <h3 className="text-2xl md:text-3xl font-bold">
            في بودكاستلي، نهتم بفكرتك بحرفية ونحوّلها إلى صوت يُسمع، محتوى
            ينتشر، وتجربة تبقى في الذاكرة.
          </h3>
          <p className="text-lg md:text-xl font-semibold">
            ابدأ مع بودكاستلي اليوم، واجعل علامتك التجارية تصل لكل مكان.
          </p>
          <Link
            href="https://wa.me/970595029014"
            className="inline-block relative text-lg font-bold text-white px-10 py-4 rounded-full bg-gradient-to-br from-primary to-foreground shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300 group overflow-hidden"
          >
            <span className="relative z-10">احجز مكالمتك المجانية الآن</span>
            <span
              className="absolute inset-0 bg-white opacity-10 blur-md group-hover:opacity-20 transition duration-300 rounded-full"
              aria-hidden="true"
            ></span>
          </Link>
        </div>

        <Iphone />
      </div>
    </section>
  );
}
