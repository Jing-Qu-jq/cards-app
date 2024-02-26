import PlaceholderImg from "../../images/placeholderImg.png";
import PlaceholderBackground from "../../images/placeholderBackground.jpg";

const Placeholder = () => (
    <div
        className="card-placeholder card-img-top"
        style={{ backgroundImage: `url(${PlaceholderBackground})` }}
    >
        <img alt="placeholder" src={PlaceholderImg} />
    </div>
);

export default Placeholder;
