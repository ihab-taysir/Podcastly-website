import "./globals.css";
import Header from "@components/Header";
import Container from "@components/container";
import Footer from "@components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "بودكاستلي - Podcastly",
  description:
    "شركة مختصة في التسويق للبودكاست في جميع أرجاء الوطن العربي , نجعل لكل فكرة في داخلك صوتا يخرج إلى النور .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        {/* OG meta tags */}
        <meta property="og:title" content="بودكاستلي - Podcastly" />
        <meta
          property="og:description"
          content="شركة مختصة في التسويق للبودكاست في جميع أرجاء الوطن العربي , نجعل لكل فكرة في داخلك صوتا يخرج إلى النور ."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="بودكاستلي - Podcastly" />
        <meta
          name="twitter:description"
          content="شركة مختصة في التسويق للبودكاست في جميع أرجاء الوطن العربي , نجعل لكل فكرة في داخلك صوتا يخرج إلى النور ."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Favicons */}
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />
      </head>

      <body className="font-sans bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          <Header />
          <Container>{children}</Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
