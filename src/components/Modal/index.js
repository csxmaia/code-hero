import notfoundPicture from "../../assets/images/notfound.jpg";
import './index.scss';
import SliderStory from "../SlideStory";

export default function Modal(props) {
  const {
    name,
    description,
    thumbnail,
    comics,
    series,
    stories,
    events
  } = props.hero;

  const { closeModal } = props;

  return (
    <div className="modal">
      <div className="modal-top">
        <div className="close-button" onClick={closeModal}>
          <span>X</span>
        </div>
      </div>
      <div className="modal-container">

        <div className="information">
          <div className="picture">
            {
              thumbnail.path.includes("image_not_available") ?
                <img src={notfoundPicture} width={"250px"}/>
                :
                <img src={`${thumbnail.path}.${thumbnail.extension}`} width={"250px"}/>
            }
          </div>
          <div className="name">
            <h2>{name}</h2>
          </div>
          <div className="description">
            {description}
          </div>
        </div>

        <div className="story">

          {comics.available !== 0 ?
            <SliderStory title="Comics" stories={comics.items} />
            :
            null
          }

          {series.available !== 0 ?
            <SliderStory title="Series" stories={series.items} />
            :
            null
          }

          {stories.available !== 0 ?
            <SliderStory title="Stories" stories={stories.items} />
            :
            null
          }

          {events.available !== 0 ?
            <SliderStory title="Events" stories={events.items} />
            :
            null
          }
        </div>
      </div>
    </div>
  )
}