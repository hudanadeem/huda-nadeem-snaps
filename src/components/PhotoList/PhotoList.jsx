import "./PhotoList.scss";
import PhotoTag from "../PhotoTag/PhotoTag";
import { Link } from "react-router-dom";
import PhotoCard from "../PhotoCard/PhotoCard";

const PhotoList = ({ filteredPhotos, drawerOpen }) => {
  return (
    <div className={`photo__drawer ${drawerOpen ? "photo__drawer--open" : ""}`}>
      {filteredPhotos.map((obj) => {
        return (
          <div key={obj.id} className="photo">
            <Link to={`/photos/${obj.id}`} className="photo__link">
              <img
                className="photo__img"
                src={obj.photo}
                alt={obj.photoDescription}
              />
            </Link>
            <div className="photo__content">
              <div className="photo__photographer">{obj.photographer}</div>
              <div className="photo__tags">
                {obj.tags.map((tag) => {
                  return <PhotoTag key={tag} tag={tag} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoList;
