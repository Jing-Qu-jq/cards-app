import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import data from "../../data.json";
import Card from "../Card";

const Page = ({ size = "default", ...rest }) => {
    return (
        <Container className="d-flex align-content-start flex-wrap">
            {data.map((item) => (
                <Card key={item.Heading} {...item} />
            ))}
        </Container>
    );
};

Page.propTypes = {
    size: PropTypes.oneOf(["default", "full"]),
};

export default Page;
