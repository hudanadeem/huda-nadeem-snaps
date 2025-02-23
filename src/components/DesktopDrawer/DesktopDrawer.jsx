import "./DesktopDrawer.scss";
import Tag from "../FilterTag/FilterTag";

function DesktopD({ drawerOpen, selectedTag, setSelectedTag, tags }) {
  return (
    <>
      <div className={`page__drawer ${drawerOpen ? "page__drawer--open" : ""}`}>
        <h2 className="page__drawer--title">Filters</h2>
        <ul>
          {tags.map((tag) => {
            return (
              <li
                key={tag}
                onClick={() => {
                  if (selectedTag === tag) {
                    setSelectedTag(null);
                  } else {
                    setSelectedTag(tag);
                  }
                }}
              >
                <Tag tag={tag} isClickable selectedTag={selectedTag} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default DesktopD;
