import "./globals.css";
import EmailBar from "./components/EmailBar";
import SocialBar from "./components/SocialBar";
import { Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
// import MagneticButton from "./components/MagneticButton";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
// import ThemeToggle from "./components/ThemeToggle";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Emama | MERN Stack Developer",
  description: "Elite developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
       <html lang="en">
      <body>

        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        > */}


    <Loader>
      <CursorGlow />
      <Navbar />
      <SocialBar />
      <EmailBar />
      {children}
      {/* <ThemeToggle /> */}
      <Footer />
    </Loader>

  {/* </ThemeProvider> */}
</body>
    </html>
  );        

}