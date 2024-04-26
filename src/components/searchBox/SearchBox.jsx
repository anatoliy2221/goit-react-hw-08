import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";


const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  
  const handleFilterChange = e => dispatch(changeFilter(e.target.value));
  
  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      ></input>
    </div>
  );
};

export default SearchBox;
