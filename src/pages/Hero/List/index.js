import { useEffect, useState, useRef } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import _ from "lodash";
import HeroListGrid from "../../../components/HeroListGrid";
import * as Heroes from "../../../store/actions/heroes";
import { fetchHeroes } from "../../../store/middleware/heroes";
import searchIcon from '../../../assets/images/icons/search.png'
import './index.scss';

function HeroList({ heroes, onSearchHero }) {

  const [searchValue, setSearchValue] = useState("none");

  useEffect(() => {
    fetchHeroes();
  }, [heroes.heroPerPage, heroes.currentPage, heroes.searchName])

  useEffect(() => {
    if (searchValue !== "none") {
      debounceSearch.current(searchValue);
    }
  }, [searchValue]);

  const debounceSearch = useRef(
    _.debounce((searchValue) => search(searchValue), 1000)
  );

  function search (value){
    onSearchHero(value);
  }

  return (
    <div className="hero-list">
      <div className="title">
        <h2>Busca de personagens</h2>
      </div>
      <div className="search">
        <span>Nome do personagem</span>
        <input style={{backgroundImage: `url(${searchIcon})`}} placeholder="Search" onChange={e => setSearchValue(e.target.value)}/>
      </div>
      <HeroListGrid heroes={heroes}/>
    </div>
  )
}

const mapStateToProps = state => ({
  heroes: state.heroes
})

const mapDispatchToProps = dispatch => (bindActionCreators(Heroes, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);