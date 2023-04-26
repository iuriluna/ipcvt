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
    <section className='container-videos-area' >
      {dataBase.map((video, index) => {
        return (
          <section className='videos-area' >
            <div className='layout-videos' >
              <h2 className='title-videos' >{video.snippet.title}</h2>
              <a 
                target="_blank"
                rel='noreferrer' 
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              >
                <img 
                  alt='video thumbnail'
                  className="thumb"
                  src={video.snippet.thumbnails.high.url} 
                />
              </a>
            </div>
            
          </section>
        )
      })}
    </section>
  )
}

export default Home;
