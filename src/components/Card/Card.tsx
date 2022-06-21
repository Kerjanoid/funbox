import TEXT from "../../constants/text";
import cat from "../../assets/images/Cat.png";
import "./Card.scss";
import { useState } from "react";

interface ICardProps {
  data: {
    taste: string;
    description: string;
    extra: string[];
    weight: string;
    in_stock: boolean;
  };
}

const Card: React.FC<ICardProps> = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [hover, setHover] = useState(false);

  const select = () => {
    if (data.in_stock) {
      setIsSelected(!isSelected);
      setHover(false);
    }
  };

  const onMouseEnterHandler = () => {
    setHover(true);
  };

  const onMouseLeaveHandler = () => {
    setHover(false);
  };

  return (
    <article className="card card-list__item">
      <div
        className={`card__outer ${!data.in_stock ? "card__outer_is-over" : ""} ${
          isSelected ? "card__outer_is-selected"  : ""
        }`}
        onClick={select}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <div className="card__inner">
          {isSelected && hover ? (
            <p className="card__description card__description_is-selected">
              {TEXT.CARD_DESCRIPTION_SELECTED}
            </p>
          ) : (
            <p
              className={`card__description ${
                !data.in_stock ? "card__description_is-over" : ""
              }`}
            >
              {TEXT.CARD_DESCRIPTION}
            </p>
          )}
          <h2
            className={`card__title ${!data.in_stock ? "card__title_is-over" : ""}`}
          >
            {TEXT.CARD_TITLE}
          </h2>
          <p
            className={`card__taste ${!data.in_stock ? "card__taste_is-over" : ""}`}
          >
            {data.taste}
          </p>
          <ul
            className={`card__extra-list ${
              !data.in_stock ? "card__extra-list_is-over" : ""
            }`}
          >
            {data.extra.map((item) => (
              <li
                key={item}
                className="card__extra-item"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
          <div
            className={`card__weight ${
              !data.in_stock ? "card__weight_is-over" : ""
            } ${isSelected ? "card__weight_is-selected" : ""}`}
          >
            <p className="card__weight-number">{data.weight}</p>
            <p className="card__weight-unit">{TEXT.UNIT}</p>
          </div>
          <img
            src={cat}
            className={`card__image ${!data.in_stock ? "card__image_is-over" : ""}`}
            alt="cat"
          />
        </div>
      </div>
      {data.in_stock ? (
        isSelected ? (
          <p className="card__caption">{data.description}</p>
        ) : (
          <p className="card__caption">
            {TEXT.CAPTION}
            <button className="card__caption-link" onClick={select}>
              {TEXT.LINK}
            </button>
            <span className="card__caption-dot">.</span>
          </p>
        )
      ) : (
        <p className="card__caption card__caption_is-over">
          {TEXT.CAPTION_OVER_I}
          {data.taste}
          {TEXT.CAPTION_OVER_II}
        </p>
      )}
    </article>
  );
};

export default Card;
