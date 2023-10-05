const Boton = ({ turnX, turnO, turn }) => {
  const isSelectedX = turn === turnX;
  const isSelectedO = turn === turnO;

  return (
    <div className=" px-8  py-4">
      <div className="grid gap-8 items-start justify-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x-2 divide-gray-600">
            <span
              className={`pr-6 ${
                isSelectedX && "text-5xl scale-90"
              } transition-transform duration-300  text-gray-100`}
            >
              {turnX}
            </span>
            <span
              className={`pl-6 ${
                isSelectedO && "text-5xl scale-90"
              }  text-gray-100`}
            >
              {turnO}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Boton;
