const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div
        // className="relative content-modal min-w-[320px] max-w-[480px] min-h-[200px] max-h-[600px] overflow-y-auto p-4"
        className="relative content-modal min-w-[280px] max-w-[800px] min-h-[200px] max-h-[880px]  p-8 flex flex-col items-center justify-center rounded-2xl shadow-lg shadow-purple-500/30"
        onClick={handleModalContainerClick}
      >
        <button
          className="absolute top-[1rem] right-[2rem] text-2xl"
          onClick={closeModal}
        >
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
