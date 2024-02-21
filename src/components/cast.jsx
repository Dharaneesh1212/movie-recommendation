import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
  const [castData, setCastData] = useState({});
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  const { id } = useParams();
  useEffect(() => {
    const fetchCastCrew = async () => {
      const res = await fetch(
        `https:api.themoviedb.org/3/movie/${id}?api_key=defd1902b4bb27bf2f154e42743a5266&language=en-US&append_to_response=credits`
      );
      const data = await res.json();
      setCastData(data);
    };
    fetchCastCrew();
  }, [id]);
  console.log(castData.credits);
  const renderCast = () => {
    if (castData.credits && castData.credits.cast) {
      return castData.credits.cast.slice(0,10).map((member, index) => {
        const imgPath = member.profile_path
          ? IMAGE_BASE_URL + member.profile_path
          : "/images/placeholder.jpg";
        return (
          <main className="flex items-center justify-center w-full ml-12rem flex-wrap">
            <main className="flex items-center justify-center h-[21rem] bg-white rounded-md mt-20 shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
              <div
                key={index}
                className="flex items-center justify-center flex-col gap-2 w-[16rem] r-[10rem]"
              >
                <img src={imgPath} alt="" className="w-[12rem] h-[16rem] rounded-md" />
                <span className="text-black font-medium">Name: {member.name}</span>
                <span className="text-black">{member.character}</span>
              </div>
            </main>
          </main>
        );
      });
    }
    return null;
  };

  return <main>{renderCast()}</main>;
};

export default Cast;
