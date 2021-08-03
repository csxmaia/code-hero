const INITIAL_STATE = {
  loading: true,
  searchName: null,
  currentPage: 1,
  total: 0,
  heroPerPage: 10,
  heroes: []
};

export function heroes( state = INITIAL_STATE, action ) {
  switch(action.type){
    case "REQUEST_HEROES": {
      return {
        ...state,
        loading: false,
        heroes: action.heroes,
        total: action.total
      }
    }
    case "CHANGE_PAGE": {
      return {
        ...state,
        loading: true,
        currentPage: action.toPage
      }
    }
    case "SEARCH_HERO": {
      let wordSearch = action.heroName.replace(" ", "").toLowerCase();
      return {
        ...state,
        loading: true,
        currentPage: 1,
        searchName: wordSearch
      }
    }
    default: {
      return state;
    }
  }
  return state;
}


