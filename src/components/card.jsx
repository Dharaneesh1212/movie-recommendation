import { Link } from "react-router-dom";
import Cast from "./cast";

const getPoster = (posterPath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
};

const Card = ({ poster_path, title, release_date, original_language,id }) => {
  return (
    <main className="flex items-center justify-center flex-row">
      <main className="flex items-center justify-center h-[26.5rem] flex-row ml-5 w-[16rem] bg-white rounded-md mt-12 shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-center flex-col gap-2 w-[18rem] r-[10rem]">
          <img
            className="w-[12rem] h-[16rem] rounded-md"
            src={getPoster(poster_path)}
            alt=""
          />
          <h1 className="font-bold">{title.slice(0, 20)}</h1>
          <span className="text-black font-medium">
            Language: {original_language}
          </span>
          <span className=" text-black font-medium">
            Release Date: {release_date}
          </span>
          <Link to={"/home/cast/" + id} className="py-1 px-2 bg-yellow-300 rounded-md text-lg font-semibold shadow-[0_5px_15px_rgba(0,0,0,0.35)]">View More </Link>
        </div>
      </main>
    </main>
  );
};

export default Card;
