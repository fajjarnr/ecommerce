import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { SearchOutlined } from "@ant-design/icons";

function SeacrhForm() {
  const dispatch = useDispatch();
  const { seacrh } = useSelector((state) => ({ ...state }));
  const text = seacrh;

  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/shop?${text}`);
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search"
        className="form-control mr-sm-2"
        onChange={handleChange}
      />
      <SearchOutlined onClick={handleSubmit} style={{ cursor: "pointer" }} />
    </form>
  );
}

export default SeacrhForm;
