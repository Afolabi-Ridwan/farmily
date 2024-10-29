import "./globals.css";
import Navbar from "@/components/navbar/page";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar/>
        {children}

        <ToastContainer
          position="top-right"
          autoClose={4000}
          closeOnClick
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
