import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yuying-between-cultures.yuy798224.chatgpt.site"),
  title: "YUYING.zip | Between Cultures & Possibilities",
  description: "于滢的个人赛博空间：AI、产品、韩流趋势、跨文化沟通，以及那些被好奇心推动的事。",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "YUYING.zip | Between Cultures & Possibilities",
    description: "AI、产品、韩流趋势、跨文化沟通，以及那些被好奇心推动的事。",
    url: "/",
    siteName: "YUYING.zip",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "YUYING.zip personal cyber space" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YUYING.zip | Between Cultures & Possibilities",
    description: "AI、产品、韩流趋势、跨文化沟通，以及那些被好奇心推动的事。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
