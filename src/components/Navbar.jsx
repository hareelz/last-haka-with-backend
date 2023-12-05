import { useEffect } from 'react';
import { DropdownDivider } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkAuth, logout } from '../store/actions/authActions';
import { setCurrentUser } from '../store/slices/authSlice';

function NavScrollExample() {
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('tokens')) {
      dispatch(checkAuth());
    }
  }, []);

  const handleLogout = () => {
    logout();
    dispatch(setCurrentUser());
    navigate('/login');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>

            <NavDropdown title="Auth" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate('/register')}>
                Register
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/login')}>
                Login
              </NavDropdown.Item>
              <DropdownDivider />
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Product" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate('/products')}>
                Products
              </NavDropdown.Item>

              <DropdownDivider />
              <NavDropdown.Item onClick={() => navigate('/add')}>
                Add Product
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              {currentUser ? currentUser : 'No auth user'}
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
