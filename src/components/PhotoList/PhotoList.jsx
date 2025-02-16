import './PhotoList.scss'
import PhotoTag from '../PhotoTag/PhotoTag';


const PhotoList = ({filteredPhotos, drawerOpen}) =>{
  return(
    <>
      <div className={`photo__drawer ${drawerOpen ? "photo__drawer--open" : ""}`}>
          {filteredPhotos.map((obj) => {
            return (
              <div key={obj.id} className='photo'>
                <img className="photo__img" src={obj.photo} alt={obj.photoDescription} />
                <div className="photo__content">
                  <div className="photo__photographer">{obj.photographer}</div>
                  <div className='photo__tags' >
                    {(obj.tags).map((tag) =>{
                      return(
                        <PhotoTag key={tag} tag = {tag}/>
                      )
                    })}
                  </div>
                </div>
              </div>
            );
          })} 
        </div>
    </>
  )
}

export default PhotoList;