import './index.scss';

export default function SliderStory(props) {
  const {
    title,
    stories
  } = props;

  return (
    <div className="slider-story">
      <h4>{title}</h4>
      <div className="slider">
        {stories.map((story, index) => (
          <div key={index} className="slider-item">
            <span>{story.name === ""? "Nome inválido": story.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}