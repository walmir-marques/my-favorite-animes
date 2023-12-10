import React from "react";

const AnimeModal = ({ anime, onClose }) => {
  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 flex justify-center items-center bg-black-90 bg-opacity-90 z-50 ">
      <div onClick={onClose} className="bg-white p-6 rounded-md w-11/12 h-5/6">
        <div className="flex justify-end">
          <button
            className="text-xl font-bold cursor-pointer"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">{anime.name}</h2>
        <p className="mb-4">{anime.description}</p>
        <h3 className="text-xl font-bold mb-2 mt-10 text-center">
          Principais Personagens
        </h3>
        <div className="flex flex-wrap justify-around">
          {anime.characters.map((character) => (
            <div key={character.id} className="m-2">
              <img
                src={character.characterImage}
                alt={character.name}
                className="w-32 h-40 object-center xl:w-80 xl:h-96"
              />
              <p className="text-md text-center font-bold mt-2">
                {character.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeModal;
