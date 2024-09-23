"use client";

import { Heading, Row, Col, Container } from "nes-ui-react";
import Typewriter from "typewriter-effect";

export default function Card() {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Hello", "World"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
