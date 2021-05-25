import { useEffect } from "react";
import { useData } from "../DataProvider";

import classnames from "classnames";

const DigitBtn = ({ number }) => {
  const {
    currentInput,
    setCurrentInput,
    inputSequence,
    setInputSequence,
    areDigitsDisplayed,
  } = useData();

  // Update current user's input when the button is clicked
  const handleOnClick = (e) => {
    // Check if the user's input equals to his previous one
    if (parseInt(e.target.innerHTML) === currentInput) {
      setInputSequence([...inputSequence, parseInt(e.target.innerHTML)]);
      setCurrentInput(e.target.innerHTML);
    } else {
      setCurrentInput(number);
    }
  };

  // Update user's input array
  useEffect(() => {
    if (
      currentInput !== null &&
      currentInput !== undefined &&
      typeof currentInput !== "string"
    )
      setInputSequence([...inputSequence, currentInput]);
  }, [currentInput]);

  return (
    <button
      className={classnames({
        "digit-btn": true,
        "digit-btn-disabled": areDigitsDisplayed,
      })}
      disabled={areDigitsDisplayed}
      onClick={handleOnClick}
    >
      {number}
    </button>
  );
};

export default DigitBtn;
