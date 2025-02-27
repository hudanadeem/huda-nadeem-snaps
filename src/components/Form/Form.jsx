import "./Form.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function Form({ baseURL, id, setComments, comments }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const getCommentsAndRender = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/photos/${id}/comments`
      );
      const sortedComments = response.data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );

      setComments(sortedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    getCommentsAndRender();
  }, [baseURL, id]);

  const handleChangeName = (event) => {
    setName(event.target.value);
    if (error && event.target.value) {
      setError(false);
    }
  };
  const handleChangeComment = (event) => {
    setComment(event.target.value);
    if (error && event.target.value) {
      setError(false);
    }
  };

  const isFormValid = () => {
    return name.trim() !== "" && comment.trim() !== "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      console.log(!isFormValid());
      setError(true);
      return;
    }

    const newComment = {
      name,
      comment,
    };

    axios
      .post(`${baseURL}/photos/${id}/comments`, newComment, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          setComments([response.data, ...comments]);
          getCommentsAndRender();

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
                className={`form__name ${error ? "form__name--error" : ""}`}
                type="text"
                name="name"
                onChange={handleChangeName}
                value={name}
              ></input>
            </label>
            <label className="form__label">
              comment
              <textarea
                className={`form__comment ${
                  error ? "form__comment--error" : ""
                }`}
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
