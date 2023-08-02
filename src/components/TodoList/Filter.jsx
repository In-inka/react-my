const Filter = ({ filter, onChangeFilter }) => (
  <label>
    Filter name <input type="text" value={filter} onChange={onChangeFilter} />
  </label>
);

export default Filter;
