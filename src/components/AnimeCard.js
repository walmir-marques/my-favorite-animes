import React, { useState } from "react";
import AnimeModal from "./AnimeModal";

export const AnimeCard = ({ anime }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <div
        className="mt-10 transition duration-1000 ease-in-out transform  
    hover:-translate-y-1 hover:scale-110"
      >
        <div
          className="bg-cover bg-center w-[280px] h-[366px] border border-white border-4"
          style={{ backgroundImage: `url(${anime.animeImage})` }}
          onClick={openModal}
        ></div>
        <div className="mt-2 text-white font-bold text-lg ">{anime.name}</div>
      </div>
      {modalOpen && (
        <AnimeModal anime={anime} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};
