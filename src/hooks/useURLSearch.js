import { useLocation } from "react-router-dom";

const useUrlSearch = (tag) => {
  const url = new URLSearchParams(useLocation().search);
  return url.get(`${tag}`);
};

export default useUrlSearch;
