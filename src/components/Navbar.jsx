import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import '../Styles/Navbar.css'


function Navbar2({ searchQuery, onSearchChange }) {
  return (
    <Navbar className='Navbar' expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#"><h1 >Pixabay</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className="d-flex">
            <input
        type="search"
        placeholder="Search products..."
        value={searchQuery}
        onChange={onSearchChange}
        className="input"
        id="search"
      />
           
          </Form>
            <Nav.Link className='explore' href="#action1"><h6>Explore</h6></Nav.Link>
            <Nav.Link href="#action2"><img className='bell' src={"img/bell.png"} alt="" /></Nav.Link>
           
            <Nav.Link href="#" disabled>
            <img className='user' src={"img/user.png"} alt="" />
            </Nav.Link>
            <Nav.Link href="#action1"><button className='butt'><img className='uplode' src={"img/uplode.png"} alt="" />Uplode</button></Nav.Link>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;