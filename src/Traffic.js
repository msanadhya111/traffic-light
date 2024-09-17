import { Circle } from "./Circle";
import styles from "./Traffic.module.css";

const traffic_Circle = {
  red: {
    color: "red",
    time: 2000,
    next: "green",
  },
  green: {
    color: "green",
    time: 3000,
    next: "yellow",
  },
  yellow: {
    color: "yellow",
    time: 2500,
    next: "red",
  },
};

const Traffic = () => {
  return (
    <div className={styles.container}>
      <Circle config={traffic_Circle} />
    </div>
  );
};

export default Traffic;
