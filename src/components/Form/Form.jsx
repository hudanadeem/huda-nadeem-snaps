import "./Form.scss";

function Form() {
  return (
    <>
      <div className="form__container">
        <form className="form">
          <div className="form__layout">
            <label className="form__label">
              name
              <input className="form__name" type="text" name="name"></input>
            </label>
            <label className="form__label">
              comment
              <textarea className="form__comment" name="comment"></textarea>
            </label>
          </div>
          <button className="form__btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
