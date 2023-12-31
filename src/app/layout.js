import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { DarkmodeProvider } from "@/context/Darkmodecontext";

import Authprovider from "@/components/Authprovider/Authprovider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Demo",
  description: " We bring ideas to reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkmodeProvider>
          <Authprovider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </Authprovider>
        </DarkmodeProvider>
      </body>
    </html>
  );
}
