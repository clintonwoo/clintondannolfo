import "../styles/global.css";

import { AppProps } from "next/app";
import * as React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <script
        id="theme"
        dangerouslySetInnerHTML={{
          __html:
            "let t = localStorage.getItem('theme');if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {document.documentElement.classList.add('dark');}",
        }}
      />
      <script
        async
        defer
        src="https://www.googletagmanager.com/gtag/js?id=UA-74904849-1"
      />
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)}gtag("js", new Date());gtag("config", "UA-74904849-1");`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
