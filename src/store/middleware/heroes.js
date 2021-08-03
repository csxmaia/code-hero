import api from "../../config/api";
import store from "../index";

async function fetchHeroes() {
  const { heroes } = store.getState();

  let params = {
    limit: heroes.heroPerPage,
    offset: ((heroes.currentPage - 1) * heroes.heroPerPage)
  };

  if(heroes.searchName !== "") params.nameStartsWith = heroes.searchName;

  const response = await api.get('', { params })

  store.dispatch({
    type: 'REQUEST_HEROES',
    heroes: response.data.data.results,
    total: response.data.data.total
  });
}

export { fetchHeroes }