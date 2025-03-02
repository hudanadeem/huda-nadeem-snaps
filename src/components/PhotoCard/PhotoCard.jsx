import PhotoTag from "../PhotoTag/PhotoTag";
import "./PhotoCard.scss";
import likeIcon from "../../assets/images/Like_outline.svg";

function PhotoCard({ photos }) {
  const date_input = new Date(photos.timestamp);
  const date = `${date_input.toLocaleDateString()}`;

  return (
    <>
      <div key={photos.id} className="photo-card">
        <div className="photo-card__container">
          <img
            className="photo-card__img"
            src={photos.photo}
            alt={photos.photoDescription}
          />
          <div className="photo-card__content">
            <div className="photo-card__tags">
              {photos.tags.map((tag) => {
                return <PhotoTag key={tag} tag={tag} />;
              })}
            </div>
            <div className="photo-card__content--container">
              <div className="photo-card__likes">
                <img src={likeIcon} alt="likes" />
                {photos.likes} likes
              </div>
              <div className="photo-card__date">{date}</div>
            </div>
            <div className="photo-card__photographer">
              Photo by {photos.photographer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoCard;
