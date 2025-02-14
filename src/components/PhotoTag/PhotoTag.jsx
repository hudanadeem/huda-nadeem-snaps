import './PhotoTag.scss'

const PhotoTag = ({tag}) =>{
    return (
      <>    
       <button className={'tag'}>
          {tag}
      </button>
      </>
    )
  }

export default PhotoTag;
