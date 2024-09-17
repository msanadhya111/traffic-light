import { useState } from "react";
import { Counter } from "./Counter";
import { InputValidation } from "./InputValidation";
import PalindromeChecker from "./PalindromeChecker";
import { Recursion } from "./Recursion";
import Traffic from "./Traffic";
import { useDebounce } from "./hooks/useDebouncer";
import { Todo } from "./Todo";

const App = () => {
  //example
  const [value, setValue] = useState(0);
  const lastValue = useDebounce(value, 2000);

  const data = {
    name: "John",
    surname: "Doe",
    children: [
      {
        name: "Alice",
        surname: "Doe",
        children: [
          {
            name: "Bob",
            surname: "Doe",
            children: [],
          },
        ],
      },
      {
        name: "Eve",
        surname: "Doe",
        children: [],
      },
    ],
  };
  return (
    <>
      <Todo />
      {/* <div>
        <p>
          Current Value: {value} | Debounced Value: {lastValue}
        </p>
        <button onClick={() => setValue(value + 1)}>Increment</button>
      </div> */}
      {/* <Traffic />
      <PalindromeChecker /> */}
      {/* <Counter /> */}
      {/* <InputValidation /> */}
      {/* <Recursion {...data} /> */}
    </>
  );
};

export default App;
