import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pantry Tracker",
  description: "Obay Made a pantry tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}