import * as React from "react";

import { MainLayout } from "../src/layouts/main-layout";

export default function errorPage(): JSX.Element {
  return (
    <MainLayout className="content-layout">
      <h1 className="text-center">Not found</h1>
      <p>Sorry but we were unable to find the page requested!</p>
    </MainLayout>
  );
}
