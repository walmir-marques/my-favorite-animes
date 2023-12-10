import { AnimeCard } from "./components/AnimeCard";
import animesData from "./data/animesData";

function App() {
  return (
    <div className=" bg-gradient-to-tr from-purple-600 to-blue-800 ">
      <div className="container mx-auto p-6 ">
        <h1 className="font-bold text-white text-center text-2xl uppercase">
          Meus Animes Favoritos
        </h1>
        <div className="grid grid-cls-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animesData.map((item) => (
            <AnimeCard anime={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
