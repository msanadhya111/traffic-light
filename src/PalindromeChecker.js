import React, { useState } from "react";

function PalindromeChecker() {
  let timeOut;
  const [inputString, setInputString] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);

  const handleInputChange = (event) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      setInputString(event.target.value);
    }, 500);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = inputString.toLowerCase().replace(/[^a-z]/g, "");
    // Reverse the string
    const reversedStr = cleanedStr.split("").reverse().join("");
    // Check if the original string is equal to its reverse
    setIsPalindrome(cleanedStr === reversedStr);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Enter a string..."
        />
        <button type="submit">Check Palindrome</button>
      </form>
      {inputString && (
        <div>
          {isPalindrome ? (
            <p>"{inputString}" is a palindrome.</p>
          ) : (
            <p>"{inputString}" is not a palindrome.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default PalindromeChecker;
