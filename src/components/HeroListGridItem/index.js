import { useState } from 'react';
import notfoundPicture from '../../assets/images/notfound.jpg'
import Modal from "../Modal";
import './index.scss';

export default function HeroListGridItem({heroInfo = {}, loading = false}) {
  const {
    name,
    series,
    stories,
    thumbnail
  } = heroInfo;

  console.log(loading)

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="hero-list-grid-item" onClick={() => setOpen(true)}>
        <div className="hero">
          <div className="picture">
            {
              loading?
              <img src={notfoundPicture} />
              :
              thumbnail.path.includes("image_not_available") ?
                <img src={notfoundPicture} />
                :
                <img src={`${thumbnail.path}.${thumbnail.extension}`} />
            }
          </div>
          {loading?
            <span>Loading...</span>
            :
            <span title={name}>{name}</span>
          }
        </div>
        <div className="serie">
          {
           loading?
             <span>Loading...</span>
           :
            series.available === 0 ?
              <span>Não há informações disponíveis</span>
              :
              series.items.slice(0, 3).map((serie, index) => (
                <span key={index} title={serie.name}>{serie.name}</span>
              ))

          }
        </div>
        <div className="events">
          {
            loading?
              <span>Loading...</span>
            :
              stories.available === 0 ?
                <span>Não há informações disponíveis</span>
                :
                stories.items.slice(0, 3).map((story, index) => (
                  <span key={index} title={story.name}>{story.name}</span>
                ))

          }
        </div>
      </div>
      {(open && !loading) && <Modal hero={heroInfo} closeModal={() => setOpen(false)}/>}
    </div>
  )
}