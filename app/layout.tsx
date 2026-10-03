import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yuying-between-cultures.yuy798224.chatgpt.site"),
  title: "YUYING.zip | 四时饮 · 原创产品设计",
  description: "于滢的原创产品作品集：四季自然、泡泡水膜与轻盈屏障乳，以及跨文化实践经历。",
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
