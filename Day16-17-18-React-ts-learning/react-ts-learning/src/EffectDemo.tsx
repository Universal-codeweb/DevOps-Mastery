import { useEffect } from "react";

function EffectDemo() {

  console.log("Component Rendered");

  useEffect(() => {
    console.log("Inside useEffect");
  });

  return (
    <>
      <h1>Hello React</h1>
    </>
  );
}

export default EffectDemo;