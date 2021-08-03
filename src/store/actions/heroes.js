export function onChangePage(toPage) {
  return {
    type: 'CHANGE_PAGE',
    toPage
  }
}

export function onSearchHero(heroName) {
  return {
    type: 'SEARCH_HERO',
    heroName
  }
}