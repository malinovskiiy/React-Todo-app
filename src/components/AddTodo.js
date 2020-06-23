import React, { useState } from "react";
import PropTypes from "prop-types";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInput("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <>
      <form action="#" className="mb-3" onSubmit={submitHandler}>
        <div className="row">
          <div className="col-10">
            <input {...input.bind} className="form-control" placeholder="Add todo..." />
          </div>
          <div className="col-2 text-right">
            <button type="submit" className="btn btn-success">
              Add todo
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
