import "@/styles/globals.css"; // 글로벌 스타일 적용은 _app.tsx 에서만 import
import "@/styles/styles.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
