import { Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Layout = () => {
    return (
        <>
            <Nav variant="tabs" className="container pt-5">
                <Nav.Item>
                    <Nav.Link href="/">View All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/paginated">Paginated</Nav.Link>
                </Nav.Item>
            </Nav>

            <Outlet />
        </>
    )
};

export default Layout;