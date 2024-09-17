import { useState } from "react";
import styles from "./InputValidation.module.css";

export const InputValidation = () => {
  let delay;
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const nameHandler = (event) => {
    clearTimeout(delay);
    delay = setTimeout(() => {
      setName(event.target.value);
    }, 1000);
  };

  const numberHandler = (event) => {
    clearTimeout(delay);
    delay = setTimeout(() => {
      setNumber(event.target.value);
    }, 1000);
  };

  const emailHandler = (event) => {
    clearTimeout(delay);
    delay = setTimeout(() => {
      setEmail(event.target.value);
    }, 1000);
  };

  const validationHandler = (event) => {
    event.preventDefault();
    if (name === "" || number === "" || email === "") alert("Enter Valid Data");
    else alert("Data added successfully");
    //  console.log(event.target);
  };

  return (
    <>
      <form className={styles.form}>
        <label>
          Enter your name
          <input onChange={nameHandler} type="text" name="name" />
        </label>
        <label>
          Enter your phone number
          <input onChange={numberHandler} type="number" name="phone" />
        </label>
        <label>
          Enter your email
          <input onChange={emailHandler} type="email" name="email" />
        </label>
        <button onClick={validationHandler} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
