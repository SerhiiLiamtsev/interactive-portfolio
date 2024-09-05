"use client";

import SwiperWithScroll from "./SwiperWithScroll";

interface ModalProps {
  setIsModal: any;
}

const Modal: React.FC<ModalProps> = ({ setIsModal }) => {
  
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      setIsModal(false);
    }
  };

  return (
    <main className="fixed w-screen h-screen flex justify-center items-center bg-[#ffffffb0] p-10" onClick={handleOutsideClick}>
      <div className="sm:w-[500px] w-full border border-neutral-300 rounded-lg shadow-lg bg-white p-5 animate-in fade-in duration-1000">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg text-black">Digital portfolio</h1>
          <span
            className="text-2xl cursor-pointer"
            onClick={() => setIsModal()}
          >
            &times;
          </span>
        </div>
        <h1 className="text-sm text-neutral-400">
          Scroll through the portfolio as an interactive magazine.
        </h1>
        <div className="rounded-lg w-full bg-neutral-100 text-neutral-500 flex items-center justify-center text-center py-28 my-10">
          <SwiperWithScroll />
        </div>
        <h1 className="text-center text-neutral-800 mb-3">
          Thanks for viewing!
        </h1>
        <div className="flex space-x-5 justify-center">
          <button
            className="rounded-md bg-white border border-neutral-300 text-black p-2 px-4 transition-all duration-200 hover:bg-neutral-200"
            onClick={() => setIsModal()}
          >
            Book appointment
          </button>
          <button
            className="rounded-md bg-neutral-900 p-2 px-4 transition-all duration-200 hover:bg-neutral-800 text-white"
            onClick={() => setIsModal()}
          >
            Hire immediately
          </button>
        </div>
      </div>
    </main>
  );
};

export default Modal;
