import { Html, Head, Main, NextScript } from "next/document";
import { OVERLAY_ROOT_ID } from "../common/lib/data/constans";
import ErrorBoundary from "../common/components/ErrorBoundary";

export default function Document() {
  return (
    <Html data-theme="myDark">
      <Head></Head>

      <body>
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
        <NextScript />
      </body>
    </Html>
  );
}
