const Square = ({ children, isSelected, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div
      onClick={handleClick}
      className={`square ${isSelected && "bg-green-500/50 text-white"}`}
    >
      {children}
    </div>
  );
};
export default Square;
