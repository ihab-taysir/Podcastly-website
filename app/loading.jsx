export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground px-4 text-center">
      <span className="text-6xl animate-spin mb-6">🎧</span>
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">
        جاري تحميل البودكاست...
      </h1>
      <p className="text-sm text-muted-foreground">
        خليك معنا، المحتوى الصوتي الرهيب ورا الباب 🎙️
      </p>
    </div>
  );
}
