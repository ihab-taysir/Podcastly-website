"use client";

export default function Error({ reset }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground px-4 text-center">
      <span className="text-6xl mb-6">🚫</span>
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">
        صار في خطأ غير متوقع
      </h1>
      <p className="text-sm text-muted-foreground mb-4">
        مش مشكلة... ارجع حاول من جديد 🔁
      </p>
      <button
        onClick={reset}
        className="bg-primary text-white py-2 px-5 rounded-full hover:opacity-90 transition"
      >
        حاول مرة تانية
      </button>
    </div>
  );
}
