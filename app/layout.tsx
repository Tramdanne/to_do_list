import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Process from "./components/Process";
import TodoInput from "./components/TodoInput";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="gap-2 flex flex-col items-center justify-center rounded-lg mt-10">
        <Header />
        <main className="w-250 flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
