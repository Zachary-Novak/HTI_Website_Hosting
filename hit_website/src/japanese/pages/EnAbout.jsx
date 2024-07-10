import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import babyImage from '../assets/baby.png';
import jamImage from '../assets/jam.png';
import yamaImage from '../assets/yama.png';
import Menu from '../Menu';
import { useLocation, useNavigate } from 'react-router-dom';

const EnAbout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [misclickCount, setMisclickCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Check if state exists and has a count property
    if (location.state && location.state.count !== undefined) {
      setMisclickCount(location.state.count);
      setTime(location.state.time);
    }
  }, [location]);

  useEffect(() => {
    // Run on initial render
    confirm("Task 2: Find the survey 'About the layout of Japanese websites (HTI)'!");
    setInterval(() => { setTime(time => time + 1); }, 1000);
  }, []);

  const handleMisclick = () => {
    setMisclickCount(prevCount => prevCount + 1);
    alert(`Number of misclicks: ${misclickCount + 1} Time: ${time}`);
  };

  const pageTitle = 'About';
  const pageDescription = 'Welcome to the React Bootstrap template';

  const sidebarLinks = [
    'Shopping', 'News', 'Map', 'Weather', 'Disaster', 'Fashion', 'Programs', 'Boxing',
    'Travel', 'Drama', 'Gacha', 'Finance', 'Games', 'Survey', 'Bulletin Board', 'Weather',
    'Knowledge Bag', 'Fortune Telling', 'Calendar', 'Lottery', 'Auction', 'Overseas News',
    'Music', 'Movies', 'Comics', 'Anime'
  ];

  const categories = [
    { title: 'Social Issues & Surveys', items: ['Survey on Awareness and Actions Regarding Environmental Protection', 'Survey on Awareness and Experiences Regarding Gender Equality', 'Survey on Awareness of Racial Discrimination and Diversity'] },
    { title: 'Entertainment', items: ['Survey on Favorite Movie Genres and Reasons', 'Survey on Music Listening Habits and Favorite Artists', 'Survey on Gaming Frequency and Favorite Genres', 'Survey on Types and Duration of Hobbies & Skills', 'Survey on TV Viewing Habits and Favorite Programs'] },
    { title: 'Technology', items: ['Survey on Smartphone Usage Frequency and Most Used Apps', 'Survey on Awareness and Measures of Cybersecurity', 'Survey on the Layout of Japanese Websites (HTI)'] },
    { title: 'Travel & Leisure', items: ['Survey on Recent Travel Plans and Execution', 'Survey on Satisfaction with Tourist Spots and Recommendations', 'Survey on Travel Budget and Actual Expenditure'] },
    { title: 'Relationships', items: ['Survey on How to Maintain Friendships and Satisfaction', 'Survey on Family Relationships and Communication Methods', 'Survey on Awareness and Experiences Regarding Romance & Marriage'] },
    { title: 'Personal Development', items: ['Survey on Activities for Self-improvement and Their Effects', 'Survey on Methods to Maintain Motivation and Success Stories', 'Survey on Effective Time Management Methods'] }
  ];

  const adImages = [babyImage, jamImage, yamaImage];

  return (
    <Container>
      <Menu/>
      <Row>
        <Col xs={2}>
          <Card style={{marginTop: 20}}>
            <Card.Body>
              {sidebarLinks.map((link, index) => (
                <li onClick={handleMisclick} key={index} style={{listStyleImage: '🌐 ', marginBottom: 20}}>
                  <a href="javascript:void(0)">{link}</a>
                </li>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={8}>
          <Card style={{marginTop: 20}}>
            <Card.Body>
              <Row>
                <Col sm={12} style={{backgroundColor: '#9EB4DB', padding: 20}}>
                  {['Main', 'Economy', 'Sports', 'Science'].map((text, index) => (
                    <Button onClick={handleMisclick} key={index} style={{marginRight: 20}} variant="light">{text}</Button>
                  ))}
                </Col>
              </Row>
              <Row style={{marginTop: 20}}>
                {categories.map((category, index) => (
                  <React.Fragment key={index}>
                    <li onClick={handleMisclick}><a href="javascript:void(0)">{category.title}</a></li>
                    <ol style={{listStyleType: 'lower-alpha', marginLeft: 50}}>
                      {category.items.map((item, itemIndex) => (
                        <li onClick={!item.includes("HTI") ? handleMisclick : () => {
                          alert("Congratulations!");
                          navigate('/survey', { state: { time, count: misclickCount, siteVersion: "Japanese (English-translated)" } });
                        }} key={itemIndex}><a href="javascript:void(0)">{item}</a></li>
                      ))}
                    </ol>
                  </React.Fragment>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
          <Card style={{marginTop: 20}}>
            <Card.Body>
              {adImages.map((image, index) => (
                <img onClick={handleMisclick} key={index} style={{width: 160, height: 250, marginTop: 20}} src={image} alt={`Ad ${index + 1}`} />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EnAbout;