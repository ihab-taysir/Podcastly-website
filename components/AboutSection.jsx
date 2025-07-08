export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-1 gap-12">
        {/* عنوان كبير */}
        <h2 className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-extrabold text-center leading-tight bg-gradient-to-br from-primary to-foreground text-transparent bg-clip-text mb-10 px-2 py-10">
          من نحن؟
        </h2>

        {/* الفقرة التعريفية */}
        <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
          "بودكاستلي" منصة رقمية متخصصة في إيصال الأفكار القوية للجمهور الصحيح.
          بدأنا من عالم الصوت، وتوسعنا لنقدم تجربة رقمية متكاملة تصنع التأثير،
          وتعزز الحضور، وتبني محتوى يُشارك ويُسمع ويُصنع منه الفرق.
        </p>

        {/* الرؤية */}
        <div className="bg-muted/40 rounded-2xl p-6 md:p-10 shadow-md transition-colors duration-500">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            🎯 رؤيتنا:
          </h3>
          <p className="text-base md:text-lg leading-relaxed">
            أن نكون الوجهة الأولى لإطلاق وتطوير البودكاست في العالم العربي،
            ونساهم في صناعة محتوى صوتي يرتقي بالمشهد الإعلامي الرقمي ويعكس
            أصواتاً حقيقية وملهمة.
          </p>
        </div>

        {/* الأهداف */}
        <div className="bg-muted/40 rounded-2xl p-6 md:p-10 shadow-md transition-colors duration-500">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            🚀 أهدافنا:
          </h3>
          <ul className="space-y-4 text-base md:text-lg list-inside">
            <li className="flex gap-2 items-start">
              <span className="text-primary mt-1">●</span>
              تمكين الأفراد والعلامات التجارية من إطلاق بودكاست احترافية.
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-primary mt-1">●</span>
              تعزيز المحتوى العربي الصوتي بجودة إنتاجية عالية.
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-primary mt-1">●</span>
              نشر قصص وتجارب تستحق أن تُروى وتُسمع.
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-primary mt-1">●</span>
              تقديم حلول متكاملة ومخصصة تناسب احتياجات كل مشروع بودكاست.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
