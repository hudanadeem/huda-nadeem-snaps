import './PhotoList.scss'
import photos from '../../data/photos.json'


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
                {/* <div className="photo__tags">number of tags: {obj.tags.length}</div> */}
                <div className="photo__tags">{obj.tags}</div>
              </div>
            </div>
          );
        })} 
      </div>
    </>
  )
}


export default PhotoList;

/* function CardList({cardContent}) {

    return (
      <section className="card-list">
        {
          cardContent.map((card) => {
            return (
              <article key={card.id}>
                  <Card content={card.content} title={card.title} />
              </article>
            )
          })
        }
      </section>
    );
  }
  
  export default CardList;*/