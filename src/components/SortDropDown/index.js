import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
const SortDropdown = ({ label, menu, handleSelect }) => (
    <Dropdown onSelect={(event) => handleSelect(event)}>
        <Dropdown.Toggle
            variant="secondary"
            aria-label={label}
        >
            {label}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {menu.map((manuItem) => (
                <Dropdown.Item
                    eventKey={manuItem}
                    aria-label={manuItem}
                    key={manuItem}
                >
                    {manuItem}
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
);

export default SortDropdown;
