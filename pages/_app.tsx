import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar2 from "../component/layout/navbar2";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
