import css from './Counter.module.css';

const Value = ({ value }) => {
  return <span className={css.number}>{value}</span>;
};

export default Value;
