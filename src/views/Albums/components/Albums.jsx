import React, { useState } from "react";
import classes from "./albums.module.css";
import { AlbumService,PhotoService } from "../services";
import { useContext,useEffect } from "react";
import { UserContext } from "../../../context";
import { useNavigate } from "react-router-dom";
const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const [albumsData] = await Promise.all([
        AlbumService.list(),
      ]);

      const userAlbums = albumsData.filter(
        item => item.userId === currentUser?.id,
      );

      setAlbums(
        userAlbums
      );
    };
    fetchData();
  }, [currentUser?.id]);
  console.log('albums: ', albums);
  const AlbumOnClick = (al) => {
    navigate(`photos?id=${al.id}`);
  };

  return (
    <>
      <div className={classes.mainAlbum}>
      {albums.map((al) => (
          <section key={al.id} id={al.id}>
            <h1 onClick={() => AlbumOnClick(al)}>{al.title}</h1>
          </section>
        ))}
      </div>
    </>
  );
};
export default Albums;
