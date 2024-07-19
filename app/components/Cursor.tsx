// components/AnimatedCursorComponent.tsx
import React from "react";
import AnimatedCursor from "react-animated-cursor";

const AnimatedCursorComponent: React.FC = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="30, 160, 255"
      outerAlpha={0.5}
      innerScale={0.6}
      outerScale={2}
    />
  );
};

export default AnimatedCursorComponent;
