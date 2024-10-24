import "@/styles/globals.css";
import { Providers } from "./providers";

import { roboto } from "@/config/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  alternates: {
    canonical: "https://www.nonfollowers.com",
  },
  applicationName: "Nonfollowers",
  title: {
    default: "Safest way to find your Instagram nonfollowers | Nonfollowers",
    template: "%s | Nonfollowers",
  },
  description:
    "Nonfollowers is the safest way to find your Instagram unfollowers without getting banned or restricted by Instagram while keeping your account safe.",
  keywords: [
    "Instagram",
    "nonfollowers",
    "unfollowers",
    "nonfollowers",
    "non-followers",
    "none followers",
    "find unfollowers",
    "instagram unfollowers",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "Nonfollowers",
    type: "website",
    locale: "en",
    url: "https://www.nonfollowers.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nonfollowers",
  url: "https://www.nonfollowers.com/",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.nonfollowers.com",
  },
  headline: "Safest way to find your Instagram nonfollowers | Nonfollowers",
  image: "https://www.nonfollowers.com/logo_color.png",
  description:
    "Nonfollowers is the safest way to find your Instagram unfollowers without getting banned or restricted by Instagram while keeping your account safe.",
  publisher: {
    "@type": "Organization",
    name: "Nonfollowers",
    logo: {
      "@type": "ImageObject",
      url: "https://www.nonfollowers.com/logo_color.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="relative z-10 flex-grow">{children}</main>
            <Footer />
          </div>
          <div className="fixed top-[25vh] h-[80vh] w-full bg-[radial-gradient(50%_50%_at_50%_50%,_#7e22ce_0,_#00dc8200)] opacity-50 blur-[180px] filter sm:top-[30vh] sm:h-[30vh]"></div>
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
