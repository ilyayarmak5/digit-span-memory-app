import { useState, useEffect } from "react";
import { useData } from "./DataProvider";

import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

const DigitsBox = () => {
  const {
    digitsSequence,
    areDigitsDisplayed,
    currentInput,
    isUserCorrect,
    isUserIncorrect,
    setAreDigitsDisplayed,
  } = useData();

  const [currentDigit, setCurrentDigit] = useState(null);
  const [counter, setCounter] = useState(0);
  const [resetCounter, setResetCounter] = useState(false);

  // A sleep function for display intervals
  const sleep = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const startGame = () => {
    sleep(1500).then(() => {
      if (counter === digitsSequence.length) {
        setResetCounter(true);
        setAreDigitsDisplayed(false);
      }
      if (resetCounter) {
        setCurrentDigit(null);
        setCounter(0);
        setResetCounter(false);
        return 1;
      }
      setCurrentDigit(digitsSequence[counter]);
      setCounter(counter + 1);
    });
  };

  // If the user clicks play button - start the game
  if (areDigitsDisplayed) {
    startGame();
  }

  // Display user's input
  useEffect(() => {
    setCurrentDigit(currentInput);
    sleep(300).then(() => setCurrentDigit(null));
  }, [currentInput]);

  return (
    <div className={"digits-box"}>
      {isUserCorrect ? (
        <CheckIcon className="check-icon" />
      ) : isUserIncorrect ? (
        <CloseIcon className="cross-icon" />
      ) : (
        currentDigit
      )}
    </div>
  );
};

export default DigitsBox;
