import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "To Do List",
  description: "My first next application (to do list app)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900">{children}</body>
    </html>
  );
}
