import './PhotoTag.scss'

const PhotoTag = ({tag}) =>{
    return (
      <>    
       <button className={'photo__tag'}>
          {tag}
      </button>
      </>
    )
  }

export default PhotoTag;
