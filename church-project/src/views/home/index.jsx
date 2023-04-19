import { useState, useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "../../service/BASE_URL";

import "./styles.css";

const Home = () => {
  const [dataBase, setDataBase] = useState([]);

  const getData = () => {
    axios.get(BASE_URL).then((response) => {
      setDataBase(response.data.items);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      {dataBase.map((video, index) => {
        return (
          <a
            target="_blank"
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
          >
            <img className="thumb" src={video.snippet.thumbnails.high.url} />
          </a>
        );
      })}
    </section>
  );
};

export default Home;
