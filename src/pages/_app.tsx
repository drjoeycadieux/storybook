import "@/styles/globals.css";
import type { AppProps } from "next/app";

/**
 * The top-most component in the app, which renders the current page.
 *
 * This component is special because Next.js automatically passes the
 * `pageProps` to it, which are the props that were pre-rendered for the page.
 *
 * @param Component The current page component to be rendered
 * @param pageProps The props that were pre-rendered for the page
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
