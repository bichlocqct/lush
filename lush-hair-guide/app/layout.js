import "./globals.css";

export const metadata = {
  title: "LUSH Scalp Scan & Hair Consultation Guide",
  description: "Bộ công cụ hướng dẫn sử dụng máy soi da đầu và chẩn đoán phân loại da đầu LUSH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
