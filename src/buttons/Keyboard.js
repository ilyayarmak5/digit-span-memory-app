import DigitBtn from "./DigitBtn";

import { useState } from "react";

const Keyboard = () => {
  const [inputBtns] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <div className="keyboard">
      {inputBtns.map((btn, index) => {
        return <DigitBtn number={btn} key={index} />;
      })}
    </div>
  );
};

export default Keyboard;
