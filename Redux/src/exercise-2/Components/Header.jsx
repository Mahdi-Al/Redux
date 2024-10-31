import "../../exercise-2/flower-style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Basket from "../material/basket.svg";
// import heroBg from "../../exercise-2/material/hero-bg.jpg";
import { useDispatch, useSelector } from "react-redux";

import { reset } from "../redux/actions/actionCreator";
import logo from "../material/download.jpg";
export default function Header() {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.count);

  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <>
      <section
        className="hero"
        src="https://aps-plants-website.netlify.app/assets/hero-bg-Dt6c_c8S.jpg"
      >
        <header className="bg-transparent">
          <Navbar collapseOnSelect expand="lg" className="bg-transparent ">
            <Container>
              <Navbar.Brand href="#home">
                <img className="logo" src={logo} alt="" />
                <span className="px-2">Simply Natural</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    <button className="btn btn-success" onClick={handleReset}>
                      Rest
                    </button>
                    <img src={Basket} alt="" />${totalAmount.toFixed(2)}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <section className="text-header">
          <Container>
            <b>Best Quality Plants</b>
            <h1>Amazing Variety Of Plants Starting Just $12</h1>
            <button className="shop-btn "> SHOP NOW</button>
          </Container>
        </section>
      </section>
    </>
  );
}
