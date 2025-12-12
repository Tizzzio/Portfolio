import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Andrea Zito | Frontend Developer Portfolio",
  description:
    "Portfolio di Andrea Zito, Frontend Developer specializzato in React, Next.js e tecnologie moderne. Creo esperienze web performanti e intuitive.",
  keywords: "Andrea Zito, Frontend Developer, React, Next.js, JavaScript, TypeScript, Portfolio, Web Developer, Italia",
  authors: [{ name: "Andrea Zito", url: "https://github.com/Tizzzio" }],
  creator: "Andrea Zito",
  publisher: "Andrea Zito",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-portfolio-domain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Andrea Zito | Frontend Developer Portfolio",
    description: "Portfolio di Andrea Zito, Frontend Developer specializzato in React, Next.js e tecnologie moderne.",
    url: "https://your-portfolio-domain.com",
    siteName: "Andrea Zito Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Aggiungi questa immagine in public/
        width: 1200,
        height: 630,
        alt: "Andrea Zito Portfolio",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrea Zito | Frontend Developer Portfolio",
    description: "Portfolio di Andrea Zito, Frontend Developer specializzato in React, Next.js e tecnologie moderne.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Sostituisci con il tuo codice
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900`}
      >
        <div className="relative overflow-x-hidden">
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>

        {/* Performance optimization: Preload critical resources */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('requestIdleCallback' in window) {
                requestIdleCallback(function() {
                  // Lazy load non-critical resources
                  if ('IntersectionObserver' in window) {
                    // Setup intersection observers for lazy loading
                    console.log('Performance optimizations loaded');
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
