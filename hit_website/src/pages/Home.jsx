import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import Menu from '../components/Menu';
import posthog from 'posthog-js'


const Home = () => {
  

  // page content
  const pageTitle = 'Home'
  const pageDescription = 'welcome to react bootstrap template'
  const [show, setShow] = useState(true);

  const [modalText, setModalText] = useState('Your first task is: find the “Student Surveys” Section');

  const [hasClosedModal, setHasClosedModal] = useState(false);
  const [firstClickSuccess, setFirstClickSuccess] = useState(false)
  const [secondClickSuccess, setSecondClickSuccess] = useState(false)
  const [misclickCount, setMisclickCount]  = useState(0)
  const [time, setTime] = useState(0);

  const navigate = useNavigate();

  const handleClose = () => { 
    setShow(false); setHasClosedModal(true)
    if (time === 0) {
      setInterval(()=>{setTime(time=>time+1)},1000)
    }
   };
  const handleFirstSuccess = () => {
    setModalText('You found the first survey link! Now for the final task, find "HTI Survey"')
    setShow(true)
    setFirstClickSuccess(true)
  };
  const handleWrongClick = () => {
    setMisclickCount(currentCount=>currentCount+1)

    if (!secondClickSuccess){
    setModalText("Wrong Link! Try again")
    } else {
      setModalText("You've already finished the task! Please proceed to the survey")
    }
    
    setShow(true)
  }

  const handleSecondSuccess = () => {
    setModalText(`Congratulations, you finished the task! Please go to our survey here.\nMisclicks:${misclickCount}`)
    setSecondClickSuccess(true)
    setShow(true)
  }



  let modalFooter = <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Start
  </Button>
</Modal.Footer>

  if ((!firstClickSuccess && hasClosedModal) || firstClickSuccess && !secondClickSuccess) {
    modalFooter =         <></>
  } else if (secondClickSuccess){
    modalFooter =         <Modal.Footer>
    <Button variant="primary" onClick={()=>                      navigate('/survey', { state: { time, count: misclickCount, siteVersion:"American"} })
}>Survey</Button>
  </Modal.Footer>
  }

  return (
    <div>
      <Menu/>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalText}
        </Modal.Body>
        {modalFooter}
      </Modal>

      <div class="container">
        <div class="row">
    <div className="col-12 col-md-2">
            
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                
                <Card.Text style={{fontSize:".75rem"}}>
                  <div>
                  <strong>
                    Newest and Recent
                  </strong>
                  <div>Find the latest update</div>
                  <strong>
                    Popular of the day
                  </strong>
                  </div>
                  <div>Shots feature today by curators</div>
                  <strong>
                    Following <span style={{background:"orange", padding:3}}>24</span>
                  </strong>
                  <div>Explore from your favorite person</div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
              <Card.Title>Popular Tags</Card.Title>
                <Card.Text style={{fontSize:".75rem"}}>
                  {[["#computerscience", "82,645 Posts"], ["#アルバイト", "65,523 Posted by this tag"], ["#research", "#survey"], 
                  ["#projects", "48,029 Posts"], ["#startups", "1,300 Posts"], 
                  ].map(category => {
                    return <div onClick={handleWrongClick}  className='hoverable' >
                      <strong>{category[0]}</strong>
                      <div style={{color:"gray"}}>{category[1]}</div>
                    </div>
                  }

                  )}
                </Card.Text>

              </Card.Body>
            </Card>
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title>Categories</Card.Title>
                <Card.Text style={{fontSize:".75rem"}}>
                  {[["Class Recommendations", "82,645 Posts", handleWrongClick], ["Homework Help", "65,523 Posted by this tag", handleWrongClick], firstClickSuccess ? ["Already Found!", "0",  handleWrongClick] : ["Student Surveys", "Posts",  handleFirstSuccess], 
                  ["Tutor Help", "48,029 Posts", handleWrongClick], ["Books Donate", "100 Posts", handleWrongClick], 
                  ["Dorm", "11,000 Posts", handleWrongClick],["Part-Time", "8,645 Posts", handleWrongClick],["Rants", "3,622 Posts", handleWrongClick]].map(category => {
                    return <div onClick={category[2]}  className='hoverable' >
                      <strong>{category[0]}</strong>
                      <div style={{color:"gray"}}>{category[1]}</div>
                    </div>
                  }

                  )}
                
                </Card.Text>

              </Card.Body>
            </Card>
            
            <Card onClick={handleWrongClick} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
            <img style={{cursor:"pointer" ,backgroundColor:'#ADD8E6', height:400, borderRadius:4}} src="/assets/images/screenshot_20240614_at_1629451.png" />

            </Card>
          </div>
    <div className="col-12 col-md-7">
            <Card style={{ "padding":20, marginBottom:20, "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <InputGroup>
        <Form.Control
        disabled={true}
          placeholder={modalText}
          aria-label={modalText}
          aria-describedby="basic-addon2"
        />
        <Button variant="success" id="button-addon2">
          Button
        </Button>
      </InputGroup>
            </Card>
                  {(firstClickSuccess &&
            ([firstClickSuccess ? ["Which donut brands do you prefer?", "Lifestyle | Sweets | Reccs",  handleWrongClick] : ["Help!! Pls pls pls answer this survey for me", "UI|UX|Survey",  handleWrongClick], ["How was the Welcome Party?", "Freshmen | Sempro | SILS", handleWrongClick], !firstClickSuccess ? ["Into KPOP?! Join our KPOP Dance Circle", "KPOP|Dance|Circle",  handleSecondSuccess] : ["HTI Survey", "UI | UX | Survey",  handleSecondSuccess], 
                  ["Tutor Help", "48,029 Posts", handleWrongClick], ["Books Donate", "100 Posts", handleWrongClick], 
                  ["Dorm", "11,000 Posts", handleWrongClick],["Part-Time", "8,645 Posts", handleWrongClick],["Rants", "3,622 Posts", handleWrongClick]].map((category,i) => {
                    return <Card bg={i ===0 && !firstClickSuccess ? "warning":""} onClick={category[2]} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
                   <Card.Body>
                <Card.Title>{category[0]}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category[1]}</Card.Subtitle>
                <Card.Text>
                  {"Relevent Information........"}
                </Card.Text>
                <Button >click</Button>
              </Card.Body>
                  </Card>
                  }

                  ))) || (!firstClickSuccess && /*<Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:40, }}>
                     */ <center><img style={{borderRadius:4, margin:4, height:400, width: 400, opacity: 0.4}} src="/assets/images/hti_logo_4.png" /></center>
                    //</Card>
                    )
         }
          </div>

    <div className="col-12 col-md-3">
            

                    <Card onClick={handleWrongClick} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
            <Card.Body>
                <Card.Title>            
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                <strong style={{ fontSize: 20 }}>
            <img style={{backgroundColor:'#ADD8E6', borderRadius:4, margin:5}} src="/assets/images/hti_logo_4.png" />

            WasedaConnect!
          </strong>                WasedaConnect is an imaginary forum website created by Group 1 of the class Human Technology Interface, aiming to explore various aspects of user interaction. 
Waseda Connect
Currently, we are conducting a study on the differences between Japanese and Western UI design, and you have been randomly assigned to either one. Please follow the two tasks assigned to you and ensure you answer the survey at the end. Thank you for your cooperation and valuable insights.
                </Card.Text>
                <Button >click</Button>
              </Card.Body>
            </Card>


            <Card onClick={handleWrongClick} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
            <img style={{cursor:"pointer" ,backgroundColor:'#ADD8E6', height:400, borderRadius:4}} src="/assets/images/screenshot_20240614_at_1639571.png" />

            </Card>

            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title>Waseda Meetups</Card.Title>
                <Card.Text style={{fontSize:".75rem"}}>
                  {[["GDSC Figma Workshop", "Shinjuku, Tokyo"], ["Coffee meetup", "Shibuya, Tokyo"], ["ICC Basketball Tournament", "Waseda Campus, Tokyo"], 
                  ["Tech meetup", "Shinjuku, Tokyo"]].map(category => {
                    return <div onClick={handleWrongClick}  className='hoverable' >
                      <strong>{category[0]}</strong>
                      <div style={{color:"gray"}}>{category[1]}</div>
                    </div>
                  }

                  )}
                
                </Card.Text>

              </Card.Body>
            </Card>
            
            <Card onClick={handleWrongClick} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", height: 200, marginBottom:20}}>
            <img style={{cursor:"pointer" , height:400, borderRadius:4}} src="/assets/images/hti_logo_4.png" />

            </Card>
                  
                  </div>
        </div>

      </div>
    </div>
  )
}

export default Home