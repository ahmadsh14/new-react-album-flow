import React, { Fragment, useState, useEffect, useContext } from "react";
import { AlbumService, PhotoService } from "../services";
import { UserContext } from "../../../context";
import classes from "./photo.module.css";
import { useParams } from "react-router-dom";


const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const { currentUser } = useContext(UserContext);
  const params = useParams();
  console.log('params: ', params);

  useEffect(() => {
    const fetchData = async () => {
      const [albumsData, photosData] = await Promise.all([
        AlbumService.list(),
        PhotoService.list(),
      ]);

      const userAlbums = albumsData.filter(
        (item) => item.userId === currentUser?.id
      );

      setPhotos(
        photosData
          .filter((el) => userAlbums.some((item) => item.id === el.albumId))
          .map((item) => ({ src: item.url, width: 600, height: 600 }))
      );
    };
    fetchData();
  }, [currentUser?.id]);

  console.log("photos: ", photos);

  return (
    <Fragment>
      <div className={classes.mainPhoto}>
        {/* {photos.map((photo) => (
          <section key={photo.id}>
            <p>{photo.title}</p>
            <img src={photo.thumbnailUrl} alt="p"></img>
          </section>
        ))} */}<p>hi</p>
      </div>
    </Fragment>
  );
};

export default Photo;
