import Square from "./ui/square";

const ModalWinner = ({ winner, restartGame }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 z-50 p-8">
      <h2 className="text-xl font-bold mb-4">{winner && "WINNER"}</h2>
      {winner && <Square>{winner}</Square>}
      <button
        className="bg-black text-white px-4 py-2 rounded-md shadow-pink-400/40"
        onClick={restartGame}
      >
        Restart game
      </button>
    </div>
  );
};

export default ModalWinner;
