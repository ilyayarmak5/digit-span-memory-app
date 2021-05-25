import { useEffect } from "react";
import { useData } from "./DataProvider";

import Healthbar from "./Healthbar";
import DigitsBox from "./DigitsBox";
import Keyboard from "./buttons/Keyboard";

const Game = () => {
  const {
    numOfDigits,
    setNumOfDigits,
    score,
    setScore,
    inputSequence,
    setInputSequence,
    digitsSequence,
    setDigitsSequence,
    level,
    setLevel,
    health,
    setHealth,
    setIsUserCorrect,
    setIsUserIncorrect,
    setShowModal,
    setUserResult,
  } = useData();

  // Compares the user's input sequence with the expected game sequence
  const compareArrays = (inputSequence, digits) => {
    return JSON.stringify(inputSequence) === JSON.stringify(digits);
  };

  const resetGame = () => {
    setUserResult({
      level,
      score,
    });
    setLevel(1);
    setHealth(3);
    setScore(0);
    setNumOfDigits(2);
    setIsUserIncorrect(false);
    setIsUserCorrect(false);
    setShowModal(true);
  };

  const continueGame = () => {
    setNumOfDigits(numOfDigits + 1);
    setInputSequence([]);
    setDigitsSequence([]);
    setLevel(level + 1);
    setScore(score + numOfDigits);
    setIsUserCorrect(true);
  };

  const takeHealthAway = () => {
    setDigitsSequence([]);
    setInputSequence([]);
    setHealth(health - 1);
    setIsUserIncorrect(true);
  };

  // Re-render whenever the user presses a digit button
  useEffect(() => {
    if (
      inputSequence.length > 0 &&
      inputSequence.length === digitsSequence.length
    ) {
      if (compareArrays(inputSequence, digitsSequence)) {
        continueGame();
      } else {
        takeHealthAway();
        if (health === 1) {
          resetGame();
        }
      }
    }
  }, [inputSequence]);

  return (
    <div className="game">
      <Healthbar />
      <div className="game-main">
        <h1>{numOfDigits} Digits</h1>
        <DigitsBox />
        <Keyboard />
      </div>
    </div>
  );
};

export default Game;
