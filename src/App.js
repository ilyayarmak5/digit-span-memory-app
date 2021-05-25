import DataProvider from "./DataProvider";

import Game from "./Game";
import GameStatus from "./GameStatus";
import Modal from "./Modal";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Game />
        <GameStatus />
        <Modal />
      </DataProvider>
    </div>
  );
}

export default App;
