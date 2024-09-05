"use client";

import { useState } from "react";
import ProjectItem from "@/components/ProjectItem";
import Modal from "@/components/Modal";
import CardSwipeModal from "@/components/CardSwipeModal";

export default function Portfolio() {
  const [count, setCount] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [isCardSwipeModal, setIsCardSwipeModal] = useState(true);

  const increaseCount = () => {
    setCount((cnt) => count + 1);
  };
  return (
    <div className="w-full">
      {isModal && <Modal setIsModal={setIsModal} />}
      <CardSwipeModal isCardSwipeModal={isCardSwipeModal} />

      <div className="w-full flex flex-col items-center p-10 max-w-[1440px] mx-auto">
        <h1 className="text-center text-5xl font-bold text-[#0A2540] leaLng-[60px] mb-10 animate-in slide-in-from-top-40 duration-1000">
          Interactive digital portfolio.
        </h1>
        <h3 className="text-2xl mt-5 mb-14 text-center animate-in slide-in-from-top-52 duration-1000 text-black">
          Complete all steps to unlock the full digital portfolio.
          <br />
          (Promise, it's worth it!)
        </h3>
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          <ProjectItem
            title="Intro"
            payment="Swipe a card"
            increaseCount={increaseCount}
          >
            <img src="./card.svg" alt="" />
          </ProjectItem>
          <ProjectItem
            title="CV"
            payment="Pay with coins"
            increaseCount={increaseCount}
          >
            <img src="./coin.svg" alt="" />
          </ProjectItem>
          <ProjectItem
            title="Portfolio"
            payment="Direct payment"
            increaseCount={increaseCount}
          >
            <img src="./payment.svg" alt="" />
          </ProjectItem>
          <ProjectItem
            title="Cover letter"
            payment="Write a check"
            increaseCount={increaseCount}
          >
            <img src="./write.svg" alt="" />
          </ProjectItem>
        </div>
        {count === 4 && (
          <div className="w-full border border-neutral-300 rounded-lg p-5 bg-white mt-10 animate-in zoom-in duration-1000">
            <div className="w-full flex justify-between">
              <h1 className="text-2xl font-bold text-black">Full digital portfolio.</h1>
              <img src="./unlock.svg" alt="" />
            </div>
            <h1 className="text-md text-neutral-700 my-10 mb-16">
              Congratulations, you now have exclusive access to my digital
              portfolio.
            </h1>
            <button
              className="bg-[#635BFF] rounded-md text-white w-full text-center py-2 transition-all duration-200 hover:bg-[#0A2540]"
              onClick={() => setIsModal(true)}
            >
              View full portfolio
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
