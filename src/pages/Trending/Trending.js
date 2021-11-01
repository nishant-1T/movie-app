import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/singleContent/SingleContent";
import "./Trending.css"

const Trending = () => {
   const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const fetchTreanding = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    console.log(data);

    setContent(data.results);
  };

  useEffect(() => {
    fetchTreanding();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {
          content.map((C) => (
            <SingleContent
              key={C.id}
              id={C.id}
              poster={C.poster_path}
              title={C.title || C.name}
              date={C.first_air_date || C.release_date}
              media_type={C.media_type}
              vote_average={C.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
