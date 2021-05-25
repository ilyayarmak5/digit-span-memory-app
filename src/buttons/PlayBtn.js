import { useData } from "../DataProvider";

const PlayBtn = () => {
  const {
    setIsStarted,
    setAreDigitsDisplayed,
    setInputSequence,
    setIsUserCorrect,
    setIsUserIncorrect,
  } = useData();

  const handleOnClick = () => {
    setIsStarted(true);
    setAreDigitsDisplayed(true);
    setInputSequence([]);
    setIsUserIncorrect(false);
    setIsUserCorrect(false);
  };

  return (
    <button className="play-btn" onClick={handleOnClick}>
      PLAY LEVEL
    </button>
  );
};

export default PlayBtn;
