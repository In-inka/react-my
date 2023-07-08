//import { Component } from 'react';
import css from './TodoList.module.css';

const TodoList = ({
  todos,
  onDelelteTodo,
  onToggleCompleted,
  completedTodos,
}) => {
  return (
    <div className={css.todoList}>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={css.list}>
            <input
              type="checkbox"
              className={css['todoList-checkbox']}
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
            <p className={css.text}> {text}</p>
            <button className={css.delete} onClick={() => onDelelteTodo(id)}>
              Deleted
            </button>
          </li>
        ))}
      </ul>
      <div className={css.prewie}>
        <p> All: {todos.length}</p>
        <p>Done: {completedTodos} </p>
      </div>
    </div>
  );
};
export default TodoList;
