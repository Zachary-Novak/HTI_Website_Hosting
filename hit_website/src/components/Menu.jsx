import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { IoNotificationsSharp } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import { IoIosSearch } from "react-icons/io";
import InputGroup from 'react-bootstrap/InputGroup';
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
const Menu = () => {
  return (
    <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          
        >
          <strong style={{fontSize:24, color:"orange"}}>
                  <img src={require("../assets/images/hti_logo_4.png")}/> 

          WasedaConnect!
          </strong>
        </Link>

        <Nav>
        <IoIosHome size={40} style={{marginRight:30}}/>
        <FaRegCalendarDays size={40} style={{marginRight:30}}/>

          
        <ul style={{marginRight:200, width:300}} className="nav ">
        <InputGroup>
        <Form.Control disabled={true}
                                type="text"
                                placeholder="Search here.."
                            />
                                <InputGroup.Text>
                                    <IoIosSearch size={30}/>
                                </InputGroup.Text>

                        </InputGroup>

          </ul>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <AiOutlineMessage size={40} style={{marginRight:30}}/>
          <IoNotificationsSharp size={40} style={{marginRight:30}}/>
          </ul>

          <div className="col-md-1 text-end">
                LastName FirstName
          </div>
        </Nav>
      </header>
    </Container>
  );
};

export default Menu;
