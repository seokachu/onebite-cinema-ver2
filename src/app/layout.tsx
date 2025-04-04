import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import style from "../styles/common.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={style.wrapper}>
          <Header />
          <main className={style.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
