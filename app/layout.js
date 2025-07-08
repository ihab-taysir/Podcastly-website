import "./globals.css";
import Header from "@components/Header";
import Container from "@components/container";
import Footer from "@components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "بودكاستلي - Podcastly",
  description: "تلخيصات لأفضل الحلقات الصوتية بشكل نقاط سهلة وواضحة.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        {/* OG meta tags */}
        <meta property="og:title" content="بودكاستلي - Podcastly" />
        <meta
          property="og:description"
          content="تلخيصات لأفضل الحلقات الصوتية بشكل نقاط سهلة وواضحة."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="بودكاستلي - Podcastly" />
        <meta
          name="twitter:description"
          content="تلخيصات لأفضل الحلقات الصوتية بشكل نقاط سهلة وواضحة."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Favicons */}
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />
      </head>

      <body className="font-sans bg-background">
        {/* ✅ ThemeProvider داخل body فقط */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Header />
          <Container>{children}</Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
