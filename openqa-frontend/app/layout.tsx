import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SpeedInsights from "./components/SpeedInsights";

export const metadata = {
  title: "Codmigo Solutions – IT Services & Technology Consulting",
  description: "Scaling Quality Through Automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* Vercel Speed Insights for Real User Monitoring */}
        <SpeedInsights />
      </body>
    </html>
  );
}
