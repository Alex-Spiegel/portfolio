import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-foreground font-body">
        <Navbar />
        <main className="px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
