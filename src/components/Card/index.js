import React from "react";
import PropTypes from "prop-types";
import { Card as BoostrapCard } from "react-bootstrap";
import Placeholder from "../Placeholder";
import Bridge from "../../images/bridge.jpg"
import numberToCurrency from "../../utils/numberToCurrency";

const Card = ({ className, Heading, Subheading, Price, showBridge, ...rest }) => {
    return (
        <BoostrapCard className="m-3" {...rest}>
            {showBridge ? (
                <BoostrapCard.Img variant="top" src={Bridge}/>
            ) : (
                <Placeholder />
            )}
            <BoostrapCard.Body>
                <BoostrapCard.Title>{Heading}</BoostrapCard.Title>
                <BoostrapCard.Text>{Subheading}</BoostrapCard.Text>
            </BoostrapCard.Body>
            <BoostrapCard.Footer>{numberToCurrency(Price)}</BoostrapCard.Footer>
        </BoostrapCard>
    );
};

Card.propTypes = {
    className: PropTypes.string,
    Heading: PropTypes.string,
    Subheading: PropTypes.string,
    Price: PropTypes.number,
    showBridge: PropTypes.bool,
};

export default Card;
