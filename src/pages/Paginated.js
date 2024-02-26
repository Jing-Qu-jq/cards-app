import CardList from "../components/CardList";
import itemsPerRow from "../utils/itemsPerRow";

const Paginated = () => {
    const cardsNumber = itemsPerRow('.d-flex.flex-wrap', 232) || 4;
    return (<CardList cardsNumber={cardsNumber} />);
};

export default Paginated;