import Card from "../Card/Card";
import TEXT from "../../constants/text";
import cardsData from "../../data/cards.json";
import "./CardList.scss";

const CardList = () => {
  return (
    <div className="card-list">
      <h1 className="card-list__header">{TEXT.TITLE}</h1>
      <div className="card-list__cards">
        {cardsData?.map(data => <Card key={data.taste} data={data}/>)}
      </div>
    </div>
  );
};

export default CardList;
