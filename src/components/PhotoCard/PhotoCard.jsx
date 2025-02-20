import PhotoTag from "../PhotoTag/PhotoTag";
import "./PhotoCard.scss";
import likeIcon from "../../assets/images/Like_outline.svg";

function PhotoCard({ photos }) {
  const date_input = new Date(photos.timestamp);
  const date = `${date_input.toLocaleDateString()}`;

  return (
    <>
      <div key={photos.id} className="photoCard">
        <div className="photoCard__container">
          <img
            className="photoCard__img"
            src={photos.photo}
            alt={photos.photoDescription}
          />
          <div className="photoCard__content">
            <div className="photoCard__tags">
              {photos.tags.map((tag) => {
                return <PhotoTag key={tag} tag={tag} />;
              })}
            </div>
            <div className="photoCard__content--container">
              <div className="photoCard__likes">
                <img src={likeIcon} alt="likes" />
                {photos.likes} likes
              </div>
              <div className="photoCard__date">{date}</div>
            </div>
            <div className="photoCard__photographer">
              Photo by {photos.photographer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoCard;
