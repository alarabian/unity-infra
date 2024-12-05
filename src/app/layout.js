import { Roboto_Condensed } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "../../public/assets/css/style.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const roboto = Roboto_Condensed({
  weight: ["100", "300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Best Real Estate Company In Lucknow|Buy Cheap Plots In Lucknow |Top Real Estate Company In Lucknow",
  description: "Best Real Estate Company In Lucknow|Buy Cheap Plots In Lucknow |Top Real Estate Company In Lucknow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
