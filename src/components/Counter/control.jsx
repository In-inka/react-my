import css from './Counter.module.css';

export const Control = ({ onClickDecrement, onClickIncrement }) => {
  return (
    <div>
      <span className={css.minus} onClick={onClickDecrement}>
        -
      </span>
      <span className={css.plus} onClick={onClickIncrement}>
        +
      </span>
    </div>
  );
};
