import { useEffect, useState } from "react";

const Useeffect1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count+1);
    }, 1000);
  });
  return <h1>ComponentDidMount: {count}</h1>;
};
export default Useeffect1;
