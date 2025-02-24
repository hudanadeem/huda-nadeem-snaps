import "./Comment.scss";

function Comment({ comment }) {

  const date_input = new Date(comment.timestamp);
  const date = `${date_input.toLocaleDateString()}`;

  return (
    <>
      <div className="comment">
        <div className="comment__header">
          <div className="comment__name">{comment.name}</div>
          <div className="comment__date">{date}</div>
        </div>
        <div className="comment__content">{comment.comment}</div>
      </div>
    </>
  );
}

export default Comment;
