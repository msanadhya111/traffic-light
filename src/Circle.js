import { useEffect, useState } from "react";
import styles from "./Circle.module.css";

export const Circle = (props) => {
  const initialColor = "red";
  const [currentColor, setCurrentColor] = useState(initialColor);
  const colors = ["red", "yellow", "green"];
  useEffect(() => {
    const { time, next } = props.config[currentColor];
    setTimeout(() => {
      setCurrentColor(next);
    }, time);
  }, [currentColor]);
  return colors.map((color) => {
    const isActiveColor = color === currentColor;
    return (
      <div
        className={styles.circle}
        style={{ backgroundColor: isActiveColor ? color : "white" }}
      ></div>
    );
  });
};
