import './PhotoTag.scss'

const PhotoTag = ({tags}) =>{
    return (
        <>
        <ul>
          {tags.map((tag) => {
            return(
              <li key={tag}>
                <button className="tag">
                  {tag}
                </button>
              </li>
            )
          })}
        </ul>
        </>
    )
}

export default PhotoTag;
