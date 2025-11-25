import { CountProvider } from "@/context/ CountContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Component {...pageProps} />
    </CountProvider>
  );
}
