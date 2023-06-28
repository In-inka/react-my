//import { Component } from 'react';
import css from './TodoList.module.css';

const TodoList = ({ todos, onDelelteTodo, completed }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id} className={css.list}>
          <p className={css.text}> {text}</p>
          <button className={css.delete} onClick={() => onDelelteTodo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
