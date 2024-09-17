import { useEffect, useState } from "react";
import styles from "./Counter.module.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [wait, setWait] = useState(true);
  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       // Direct value update approach
  //       setCounter((prevCounter) => prevCounter + 1);
  //     }, 1000);

  //     return () => clearInterval(intervalId);
  //   }, []); // Runs only once on component mount

  const countHandler = () => {
    setTimeout(() => {
      setWait((prev) => !prev);
    }, 1000);
    if (!wait) {
      setWait((prev) => !prev);
      setCounter((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className={styles.counter}>
      <span>{counter}</span>
      <button onClick={countHandler}>Increase Counter</button>
    </div>
  );
};

/*
Here, why the counter is not going beyond 1, because component is not getting re render again, and in the setInterval, it has
caught the value of counter as 0 so it remain zero, if we pass the dependency as counter then we are giving new value to it.
*/
