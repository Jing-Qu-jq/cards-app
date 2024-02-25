import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import data from "../../data.json";
import Card from "../Card";
import SortDropdown from "../SortDropDown";
import useSort, { orders } from "../../hooks/useSort";

const Page = ({ size = "default", ...rest }) => {
    const [sortedItems, sortByProps] = useSort(data, 'Heading');
    const { setSortKey, sortKey, setSortOrder, sortOrder } = sortByProps;

    return (
        <Container className="p-5">
            <div className="d-flex">
                <div className="m-2">
                    Sort by:
                </div>
                <SortDropdown
                    label={sortKey}
                    menu={Object.keys(data[0])}
                    handleSelect={setSortKey}
                />
                <div className="m-2">
                    Sort order:
                </div>
                <SortDropdown
                    label={sortOrder}
                    menu={Object.keys(orders)}
                    handleSelect={setSortOrder}
                />
            </div>
            <div className="d-flex flex-wrap">
                {sortedItems.map((item) => (
                    <Card key={item.Heading} {...item} />
                ))}
            </div>
        </Container>
    );
};

Page.propTypes = {
    size: PropTypes.oneOf(["default", "full"]),
};

export default Page;
