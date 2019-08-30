import React from "react";

const Form = ({ value, setValue, handleSubmit }) => {
  return (
    <article className="col-md-8">
      <form className="form-group p-4 border border-dark rounded shadow-lg">
        <label>Message:</label>
        <input
          type="text"
          placeholder="You underestimate my power ..."
          className="form-control my-2 p-1 shadow-sm"
          value={value}
          onChange={e => setValue(e.currentTarget.value)}
        />
        <div className="d-flex justify-content-center">
          <button
            onClick={e => handleSubmit(e)}
            className="btn btn-primary btn-block w-75 mt-3 shadow"
          >
            Try Spinning, that's a good trick!
          </button>
        </div>
      </form>
    </article>
  );
};

export default Form;
