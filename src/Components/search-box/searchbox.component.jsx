import "./searchbox.style.css";

const SearchBox = ({ onChangeHandler }) => {
  return (
    <input
      className="monsters-search-box"
      type="search"
      placeholder="search monsters"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
