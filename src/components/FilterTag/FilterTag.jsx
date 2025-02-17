import "./FilterTag.scss";

function Tag({ tag, isClickable, selectedTag }) {
  return (
    <button
      className={`filterTag ${isClickable ? "filterTag--clickable" : ""} ${
        selectedTag === tag ? "filterTag--selected" : ""
      }`}
    >
      {tag}
    </button>
  );
}

export default Tag;
