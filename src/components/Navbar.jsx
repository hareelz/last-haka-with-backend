import { useEffect } from "react";
import { ButtonGroup, DropdownDivider } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAuth, logout } from "../store/actions/authActions";
import { setCurrentUser } from "../store/slices/authSlice";

function NavScrollExample() {
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      dispatch(checkAuth());
    }
  }, []);

  const handleLogout = () => {
    logout();
    dispatch(setCurrentUser());
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            style={{
              width: "10em",
            }}
            src="https://ww2.freelogovectors.net/wp-content/uploads/2019/03/freelancerlogo.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              style={{
                fontWeight: "700",
                fontSize: "1.2em",
                marginLeft: "5em",
              }}
              onClick={() => navigate("/")}
            >
              Посты
            </Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Поиск..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Найти</Button>
            </Form>
            <NavDropdown
              style={{
                fontWeight: "600",
                fontSize: "1.2em",
                marginLeft: "2em",
              }}
              title="Sign Up"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item
                style={{ fontWeight: "500" }}
                onClick={() => navigate("/register")}
              >
                Customer
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ fontWeight: "500" }}
                onClick={() => navigate("/register-freelancer")}
              >
                Freelancer
              </NavDropdown.Item>
              <DropdownDivider />
              <NavDropdown.Item
                style={{ fontWeight: "500" }}
                onClick={handleLogout}
              >
                Выйти
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              style={{
                fontWeight: "600",
                fontSize: "1.2em",
                marginLeft: "2em",
              }}
              title="Log In"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item
                style={{ fontWeight: "500" }}
                onClick={() => navigate("/login")}
              >
                Customer
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ fontWeight: "500" }}
                onClick={() => navigate("/login-freelancer")}
              >
                Freelancer
              </NavDropdown.Item>
              <DropdownDivider />
              <NavDropdown.Item
                style={{ fontWeight: "500" }}
                onClick={handleLogout}
              >
                Выйти
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" disabled>
              <svg
                style={{ marginLeft: "4em" }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="30"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              {currentUser ? currentUser : "Не авторизован"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
