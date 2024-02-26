import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationBar = ({totalPage = 4, activePage, setActivePage}) => {
    const handlePageChange = (number) => {
        setActivePage(number)
    };

    let items = [];
    for (let number = 1; number <= totalPage; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === activePage}
                onClick={() => handlePageChange(number)}
            >
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination className="m-3">
            {items}
        </Pagination>
    );
}

export default PaginationBar;
