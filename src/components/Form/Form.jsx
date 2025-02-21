import "./Form.scss";
import { useState} from "react";
import axios from "axios";

function Form({ API_URL, API_KEY, id, setComments, comments }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !comment) {
      console.log("Failed to comment, you have errors in your form");
      return;
    }

    const newComment = {
      name,
      comment,
    };

    axios
      .post(`${API_URL}/photos/${id}/comments?api_key=${API_KEY}`, newComment, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          setComments([...comments, response.data]);

          setName("");
          setComment("");
        }
      })
      .catch((error) => {
        console.error("Error submitting comment:", error);
      });
  };

  return (
    <>
      <div className="form__container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__layout">
            <label className="form__label">
              name
              <input
                className="form__name"
                type="text"
                name="name"
                onChange={handleChangeName}
                value={name}
              ></input>
            </label>
            <label className="form__label">
              comment
              <textarea
                className="form__comment"
                name="comment"
                onChange={handleChangeComment}
                value={comment}
              ></textarea>
            </label>
          </div>
          <button className="form__btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
