import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IT UNDERGRADUATE",
          "ASPIRING FULL STACK DEVELOPER",
          "INTERESTED IN DJANGO",
          "WEB DEVELOPER",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
