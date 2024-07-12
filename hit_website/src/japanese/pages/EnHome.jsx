import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import posthog from 'posthog-js'
import img1 from "../assets/image_13.png";
import img2 from "../assets/image_10.png";
import img3 from "../assets/image_11.png";
import img4 from "../assets/image_14.png";
import img5 from "../assets/image_12.png";
import stonkImg from "../assets/stonk.png";
import radImg from "../assets/rad.png";
import yamaImg from "../assets/yama.png";
import MenuTranslated from '../MenuTranslated';
import { useNavigate } from "react-router-dom";

const ENHome = () => {
  
  const navigate = useNavigate();
  const [misclickCount, setMisclickCount] = useState(0);
  const [time, setTime] = useState(0);

  const handleMisclick = () => {
    setMisclickCount(prevCount => prevCount + 1);
    alert(`Number of Misclicks: ${misclickCount + 1}, time: ${time}`);
};

  const links = [
    { text: "Shopping", href: "#" }, { text: "News", href: "#" },
    { text: "Map", href: "#" }, { text: "Weather", href: "#" },
    { text: "Disasters", href: "#" }, { text: "Fashion", href: "#" },
    { text: "TV Shows", href: "#" }, { text: "Boxing", href: "#" },
    { text: "Travel", href: "#" }, { text: "Drama", href: "#" },
    { text: "Gacha", href: "#" }, { text: "Finance", href: "#" },
    { text: "Games", href: "#" }, { text: "Survey", href: "#" },
    { text: "Bulletin Board", href: "#" }, { text: "Weather", href: "#" },
    { text: "Knowledge", href: "#" }, { text: "Fortune Telling", href: "#" },
    { text: "Calendar", href: "#" }, { text: "Lottery", href: "#" },
    { text: "Auction", href: "#" }, { text: "Overseas News", href: "#" },
    { text: "Music", href: "#" }, { text: "Movies", href: "#" },
    { text: "Manga", href: "#" }, { text: "Anime", href: "#" }
  ];

  const newsItems = [
    "G7 Statement: Possibility of Italy Rejecting Mention of 'Abortion'",
    "Noto Earthquake: Medical Team Reportedly Turned Away",
    "Problems of Multi-Level Marketing and Lax Regulations",
    "Olympic Viewing Tour for 4 Million Yen Nearly Sold Out",
    "Ramen Businesses Struggling, Chains Gaining Momentum",
    "When Child Asks About Father, Mother Feels Fear",
    "The Reasons Behind Yoshinobu’s Emergency Resignation",
    "Distorted Time in 'Sazae-san': Including the Ohtani Episode",
    "Corporate Scandals: Lawyers Becoming More Like Consultants",
    "Ramen Businesses Struggling, Chains Gaining Momentum",
    "100% Orange Juice Market Shrinking",
    "Ameyoko: 70% of Dining Establishments Run by Foreigners",
    "Mystery of Yamada Udon's Contrarian Trend Against Health Boom",
    "Middle School Cyclist in Critical Condition After Collision with Car"
  ];

  const events = [
    { img: img1, title: "Advice from Seniors to New Students! Start New Encounters Meeting! 4/3 12:20 PM Free Participation!", description: "senior group" },
    { img: img2, title: "Interested in KPOP!? Join Our Circle! Beginners Welcome!! Free Participation! 4/3 12:20 PM Free Participation!", description: "Kimchi Dance Circle" },
    { img: img3, title: "Volunteer Activities Wanted - No Experience Needed!", description: "World Beginning NPO" },
    { img: img4, title: "UI/UX Workshop Report - Free Participation!", description: "TekuTeku Internet Technology Corporation" },
    { img: img5, title: "Help! Please Answer Survey on Food!", description: "Natto Fermentation Corporation" }
  ];

  useEffect(() => {
    confirm("First Task: Find the Survey section!");
    setInterval(() => { setTime(time => time + 1) }, 1000);
  }, []);

  return (
    <div>
      <MenuTranslated />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Card style={{ marginTop: 20 }}>
              <Card.Body>
                <ul>
                  {links.map((link, index) => (
                    <li key={index} style={{ marginBottom: 20 }} onClick={link.text !== "Survey" ? handleMisclick : () => {
                      navigate('/jpabouttranslated', { state: { time, count: misclickCount } });
                    }}><a href="javascript:void(0)" >{link.text}</a></li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </div>
          <div className="col-8">
            <Card style={{ marginTop: 20 }}>
              <Card.Body>
                <div className="row">
                  <div style={{ backgroundColor: '#9EB4DB', padding: 20 }} className="col-sm-12">
                    {["Main", "Economy", "Sports", "Science"].map((category, index) => (
                      <Button onClick={handleMisclick} key={index} style={{ marginRight: 20 }} variant="light">{category}</Button>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: 20 }} className="row">
                  <ul>
                    {newsItems.map((item, index) => (
                      <li onClick={handleMisclick} key={index}><a href="javascript:void(0)">{item}</a></li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ marginTop: 20 }}>
              <Card.Body>
                {events.map((event, index) => (
                  <div key={index} style={{ marginBottom: 15 }} className="row">
                    <div className="col-3">
                      <Card>
                        <Card.Body>
                          <img onClick={handleMisclick} style={{ width: 150, height: 150 }} src={event.img} alt={`img${index + 1}`} />
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="col-9">
                      <Card>
                        <Card.Body onClick={handleMisclick}>
                          <a href="javascript:void(0)" style={{ fontSize: 20 }}>{event.title}</a>
                          <p style={{ color: '#828282', fontSize: 20, marginTop: 15 }}>{event.description}</p>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </div>
          <div style={{ marginTop: 20 }} className="col-2">
            <Card onClick={handleMisclick}>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="User Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form>
                <Button variant="dark">Login</Button>
                {[stonkImg, radImg, yamaImg].map((image, index) => (
                  <img key={index} style={{ width: 160, height: 250, marginTop: 20 }} src={image} alt={`img${index + 6}`} />
                ))}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ENHome;