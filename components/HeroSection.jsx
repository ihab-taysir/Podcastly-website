import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mt-16 min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="grid md:grid-cols-2 gap-8 items-center py-3 w-full">
        <div className="space-y-6">
          <h1 className="text-primary text-4xl md:text-5xl font-bold leading-tight">
            من الفكرة إلى الشهرة: <br /> أطلق بودكاستك معنا
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-foreground)]">
            لأن صوتك يستحق أن يُسمع... في{" "}
            <strong className="text-2xl">بودكاستلي</strong> نساعدك على تحويل
            أفكارك إلى محتوى رقمي احترافي ومؤثر. سواء كنت صانع محتوى، علامة
            تجارية، أو مؤسسة إعلامية، نوفر لك الدعم الكامل من الإنتاج إلى
            الانتشار.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/radio.png"
            alt="راديو"
            width={600}
            height={500}
            className="object-contain drop-shadow-xl dark:invert-0"
          />
        </div>
      </div>
    </section>
  );
}
