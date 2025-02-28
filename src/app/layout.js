import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { WagmiProviders } from "./Components/WagmiProvider";
import { Providers } from "./Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proton || Reinventing Real Estate Investment",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <WagmiProviders>
            <Navbar />
            {children}
            <Footer />
          </WagmiProviders>
        </Providers>
      </body>
    </html>
  );
}
