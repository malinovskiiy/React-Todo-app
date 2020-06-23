import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from '../context';

const styles = {
  li: {
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  input: {
    marginRight: "1rem",
  },
  strong: {
    marginRight: "1rem",
  },
};

function TodoItem({ todo, index, onChange }) {

  const { removeTodo } = useContext(Context)  

  let classes = []

  if(todo.completed) classes.push('crossed')
  
  return (
    <li
      style={styles.li}
      className="d-flex justify-content-between align-items-center mb-3 py-2 px-3"
    >
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong style={styles.input}>{index + 1}</strong>
        {todo.title}
      </span>

      <button className="btn btn-sm btn-danger" onClick={removeTodo.bind(null, todo.id)}>
        <span>&times;</span>
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
