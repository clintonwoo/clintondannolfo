import * as React from "react";

export function Hero(): JSX.Element {
  return (
    <div className="content-center content-layout flex flex-col sm:flex-row">
      <div className="flex flex-col justify-center">
        <h1 className="font-mono text-lg">Hi, I'm Clinton D'Annolfo.</h1>
        <p>I'm the only person in the world with my name.</p>
        <p>
          I'm passionate about technology and making a (good) dent on the
          Universe.
        </p>
        <p>I'll do anything to help.</p>
      </div>
    </div>
  );
}
