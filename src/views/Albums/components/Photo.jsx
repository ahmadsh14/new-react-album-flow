import React, { Fragment, useState, useEffect } from "react";
import { PhotoService } from "../services";
import classes from "./photo.module.css";
import { useLocation } from "react-router-dom";

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const location = useLocation();
  const albumId = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    const fetchData = async () => {
      const [photosData] = await Promise.all([PhotoService.list()]);

      const userPhoto = photosData.filter((item) => item.albumId === +albumId);
      setPhotos(userPhoto);
    };
    fetchData();
  }, [albumId]);

  return (
    <Fragment>
      <div className={classes.mainPhoto}>
        {photos.map((photo) => (
          <section key={photo.id}>
            <p>{photo.title}</p>
            <img src={photo.thumbnailUrl} alt="p"></img>
          </section>
        ))}
      </div>
    </Fragment>
  );
};

export default Photo;
