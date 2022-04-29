import * as React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body className="dark:bg-black dark:text-white max-w-3xl mb-16 mx-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
