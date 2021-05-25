import { useData } from "./DataProvider";

import StatusItem from "./StatusItem";
import PlayBtn from "./buttons/PlayBtn";

const GameStatus = () => {
  const { level, score } = useData();
  return (
    <div className="game-status">
      <StatusItem value={level} text="Level" />
      <StatusItem value={score} text="Score" />
      <PlayBtn />
    </div>
  );
};

export default GameStatus;
