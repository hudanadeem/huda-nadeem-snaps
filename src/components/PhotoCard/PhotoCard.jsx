import PhotoTag from "../PhotoTag/PhotoTag";
import "./PhotoCard.scss";
import likeIcon from "../../assets/images/Like_outline.svg";

function PhotoCard({ photo }) {
  const date_input = new Date(photo.timestamp);
  const date = `${date_input.toLocaleDateString()}`;

  return (
    <>
      <div key={photo.id} className="photo-card">
        <div className="photo-card__container">
          <img
            className="photo-card__img"
            src={photo.photo}
            alt={photo.photoDescription}
          />
          <div className="photo-card__content">
            <div className="photo-card__tags">
              {photo.tags.map((tag) => {
                return <PhotoTag key={tag} tag={tag} />;
              })}
            </div>
            <div className="photo-card__content--container">
              <div className="photo-card__likes">
                <img src={likeIcon} alt="likes" />
                {photo.likes} likes
              </div>
              <div className="photo-card__date">{date}</div>
            </div>
            <div className="photo-card__photographer">
              Photo by {photo.photographer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoCard;
