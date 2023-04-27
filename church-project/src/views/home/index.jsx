import { useState, useEffect } from "react";
import axios from "axios";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { BASE_URL } from "../../service/BASE_URL";

import "./styles.css";

const Home = () => {
  const [dataBase, setDataBase] = useState([]);
  const [load, setLoad] = useState(true);

  const getData = () => {
    axios.get(BASE_URL).then((response) => {
      setDataBase(response.data);
      if (response.data.length > 0) {
        setLoad(false);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="container-videos-area">
      {dataBase.map((video, index) => {
        return (
          <section key={index} className="videos-area">
            <div className="layout-videos">
              <h2 className="title-videos">{video.snippet.title}</h2>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              >
                <img
                  alt="video thumbnail"
                  className="thumb"
                  src={video.snippet.thumbnails.high.url}
                />
              </a>
            </div>
          </section>
        );
      })}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </section>
  );
};

export default Home;
