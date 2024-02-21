import { useState, useEffect } from "react";
import Card from "./card";
import load from "../assets/load.svg";

const Upcomming = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
//upcomming
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=defd1902b4bb27bf2f154e42743a5266&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies((prev) => [...prev, ...data.results]);
        setFilteredMovies((prev) => [...prev, ...data.results]); // Initialize filtered movies with all movies
        setLoading(false);
      })
      .catch((err) => console.error("something went wrong", err));
  }, [page]);

  const handleScroll = () => {
    // console.log("height:",document.documentElement.scrollHeight);
    // console.log("top:",document.documentElement.scrollTop);
    // console.log("window:",window.innerHeight);

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (input) => {
    const searchTerm = input.toLowerCase();
    if (searchTerm === "") {
      setFilteredMovies(movies); // Reset to the original set of movies
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
      );
      setFilteredMovies(filtered);
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    handleSearch(inputValue);
  };

  return (
    <main className="flex item-center">
      <div className="h-20 w-screen fixed">
        <div className="flex items-center justify-center gap-4 bg-black h-14 text-white">
          <input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={handleChange}
            className="pl-1 h-7 text-white bg-transparent outline-none border-b border-white font-semibold text-lg"
          />
        </div>
      </div>
      <div className="w-[72rem] my-4">
        <main className="flex flex-wrap w-full ml-[12rem]">
          {filteredMovies.map((movie, index) => (
            <Card key={index} {...movie} />
          ))}
        </main>
        <div className="flex items-cente justify-center ml-[15rem] mt-16">
          {loading && <img src={load} alt="" />}
        </div>
      </div>
    </main>
  );
};

export default Upcomming;
