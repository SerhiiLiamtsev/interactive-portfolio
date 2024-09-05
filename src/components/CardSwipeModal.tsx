
interface ModalProps {
  isCardSwipeModal: any;
}

const CardSwipeModal: React.FC<ModalProps> = ({isCardSwipeModal}) => {
	const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      isCardSwipeModal(false);
    }
  };
  return (
    <main
      className="fixed w-screen h-screen flex justify-center items-center bg-[#ffffffb0] p-10"
      onClick={handleOutsideClick}
    >
      <div className="sm:w-[500px] w-full border border-neutral-300 rounded-lg shadow-lg bg-white p-5 animate-in fade-in duration-1000">
        ssfsa
      </div>
    </main>
  );
};

export default CardSwipeModal;
