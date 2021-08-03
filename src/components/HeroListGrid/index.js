import HeroListGridItem from "../HeroListGridItem";
import './index.scss';

export default function HeroListGrid({ heroes }) {

  return(
    <div className="hero-list-grid">
      <div className="head">
        <div>
          <span>Personagem</span>
        </div>
        <div>
          <span>Séries</span>
        </div>
        <div>
          <span>Eventos</span>
        </div>
      </div>
      <div className="body">
        {
          heroes.loading === false ?
          <div>
            {heroes.heroes.map((hero, index) => (
              <HeroListGridItem key={index} key={hero.id} heroInfo={hero}/>
            ))}
          </div>
          :
          <div>
            <HeroListGridItem loading={true} />
          </div>
        }
      </div>
    </div>
  )
}
