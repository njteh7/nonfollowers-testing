import "@/styles/globals.css";
import { Providers } from "./providers";

import { roboto } from "@/config/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
