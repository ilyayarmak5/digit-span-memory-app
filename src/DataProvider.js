import React, { useContext, useState } from "react";

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [digitsSequence, setDigitsSequence] = useState([]);
  const [numOfDigits, setNumOfDigits] = useState(2);
  const [score, setScore] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [areDigitsDisplayed, setAreDigitsDisplayed] = useState(false);

  const [currentInput, setCurrentInput] = useState(null);
  const [inputSequence, setInputSequence] = useState([]);

  const [health, setHealth] = useState(3);

  const [isUserCorrect, setIsUserCorrect] = useState(false);
  const [isUserIncorrect, setIsUserIncorrect] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [userResult, setUserResult] = useState({});

  // Creates a sequence of digits which the user needs to guess
  const createDigits = () => {
    let temporaryDigits = [];
    for (let i = 0; i < numOfDigits; i++) {
      let randomDigit = Math.floor(Math.random() * 9);
      temporaryDigits.push(randomDigit);
    }
    setDigitsSequence(temporaryDigits);
  };

  if (isStarted) {
    createDigits();
    setIsStarted(!isStarted);
  }
  return (
    <DataContext.Provider
      value={{
        level,
        setLevel,
        digitsSequence,
        setDigitsSequence,
        score,
        setScore,
        isStarted,
        setIsStarted,
        areDigitsDisplayed,
        setAreDigitsDisplayed,
        numOfDigits,
        setNumOfDigits,
        currentInput,
        setCurrentInput,
        inputSequence,
        setInputSequence,
        health,
        setHealth,
        isUserCorrect,
        setIsUserCorrect,
        isUserIncorrect,
        setIsUserIncorrect,
        showModal,
        setShowModal,
        userResult,
        setUserResult,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
