import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import data from "../../data.json";
import Card from "../Card";
import SortDropdown from "../SortDropDown";
import PaginationBar from "../PaginationBar";
import useSort, { orders } from "../../hooks/useSort";
import getCurrentList from "../../utils/getCurrentList";

const CardList = ({ cardsNumber }) => {
    // sorting
    const [sortedItems, sortByProps] = useSort(data, 'Heading');
    const { setSortKey, sortKey, setSortOrder, sortOrder } = sortByProps;

    // pagination
    const [activePage, setActivePage] = useState(1);

    const visibleItems = cardsNumber ? getCurrentList(sortedItems, activePage, cardsNumber) : sortedItems;

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
                {visibleItems.map((item) => (
                    <Card key={item.Heading} {...item} />
                ))}
            </div>
            <PaginationBar
                totalPage={Math.ceil(data.length/cardsNumber)}
                activePage={activePage}
                setActivePage={setActivePage}
            />
        </Container>
    );
};

CardList.propTypes = {
    cardsNumber: PropTypes.number,
};

export default CardList;
