// import { useState } from "react";
// import "./App.css";

import { useState } from "react";
import Boton from "./components/button-players";
import Modal from "./components/ui/modal";
import { useModal } from "./hooks/useModal";
import Square from "./components/ui/square";
import ModalWinner from "./components/modal-winner";
import { TURNS } from "./constants/boardConstants";
import { checkEndGame, checkResult } from "./utils/board";
// import Modal from "./components/modal-winner";

function App() {
  const propiedades = Object.keys(TURNS);
  const turnoAleatorio =
    propiedades[Math.floor(Math.random() * propiedades.length)];
  console.log(typeof turnoAleatorio);

  const [board, setBoard] = useState(() => {
    const boardFromStorage = localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = localStorage.getItem("turn");
    return turnFromStorage
      ? JSON.parse(turnFromStorage)
      : TURNS[turnoAleatorio];
  });
  const [isOpenWinner, openWinner, closeWinner] = useModal(false);
  // const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null);

  const restartGame = () => {
    setWinner(null);
    setBoard(Array(9).fill(null));
    setTurn(TURNS[turnoAleatorio]);
    closeWinner();
    localStorage.removeItem("board");
    localStorage.removeItem("turn");
  };

  const updateBoard = (index) => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    localStorage.setItem("board", JSON.stringify(newBoard));
    localStorage.setItem("turn", JSON.stringify(newTurn));

    //check winner
    const newWinner = checkResult(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      openWinner();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
      openWinner();
    }
    //TODO: check is over
  };

  return (
    <main className="space-y-3">
      <h1 className="text-3xl text-center text-white tracking-tight">
        TIC TAC TOE
      </h1>
      <section className="grid grid-cols-3 gap-10 text-white p-4 rounded shadow">
        {board.map((square, i) => (
          <Square key={i} index={i} updateBoard={updateBoard}>
            {square}
          </Square>
        ))}
      </section>
      <section className="flex space-x-5 items-center justify-center">
        <Boton turnX={TURNS.X} turnO={TURNS.O} turn={turn} />
        <button
          className="text-white shadow-lg bg-black shadow-purple-600/30 rounded-md p-4"
          onClick={restartGame}
        >
          Restart Game
        </button>
      </section>

      <Modal isOpen={isOpenWinner} closeModal={closeWinner}>
        <ModalWinner winner={winner} restartGame={restartGame} />
      </Modal>
    </main>
  );
}

export default App;
