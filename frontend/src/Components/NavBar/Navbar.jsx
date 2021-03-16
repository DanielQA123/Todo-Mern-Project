import {Navbar, Nav} from 'react-bootstrap';

const NavbarPage = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Dan's Reminders</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Todo's</Nav.Link>
                    <Nav.Link href="#pricing">Scheduled</Nav.Link>
                    <Nav.Link href="#pricing">Accomplishments</Nav.Link>
                    <Nav.Link href="#pricing">Review</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )

}

export default NavbarPage;