import './PhotoList.scss'
import photos from '../../data/photos.json'
import PhotoTag from '../PhotoTag/PhotoTag';


const PhotoList = () =>{
  return(
    <>
      <div className="photo-list">
        {photos.map((obj) => {
          return (
            <div key={obj.id} className="photo">
              <img className="photo__img" src={obj.photo} alt={obj.photoDescription} />
              <div className="photo__content">
                <div className="photo__photographer">{obj.photographer}</div>
                <div className='photo__tags'><PhotoTag tags = {obj.tags}/></div>
              </div>
            </div>
          );
        })} 
      </div>
    </>
  )
}


export default PhotoList;