import React, { useState, useEffect } from "react";

const Window = () => {
  let [width, setSize] = useState(window.innerWidth);
  let [height, setHeight] = useState(window.innerHeight);

  let windowSize = () => {
    setSize(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", windowSize);
    return () => {
      window.removeEventListener("resize", windowSize);
    };
  }, []);

  return (
    <section>
      <div className="space-1">
        <span className="width">{width}</span>
        <span className="height">{height}</span>
      </div>
    </section>
  );
};

export default Window;
