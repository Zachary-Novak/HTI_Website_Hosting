import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, ProgressBar } from 'react-bootstrap';
import { useLocation} from 'react-router-dom';

const Survey = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const location = useLocation();

  const [misclickCount, setMisclickCount] = useState(0);
  const [siteVersion, setSiteVersion] = useState("American")

  useEffect(() => {
    // Check if state exists and has a count property
    if (location.state && location.state.count !== undefined) {
      setMisclickCount(location.state.count);
      alert(location.state.count)
    }
    if (location.state && location.state.siteVersion !== undefined) {
      setSiteVersion(location.state.siteVersion);
      alert(location.state.siteVersion)
    }
  }, [location]);

  const questions = [
    {
      id: 1,
      question: "How satisfied are you with our product?",
      options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"]
    },
    {
      id: 2,
      question: "How likely are you to recommend our product to others?",
      options: ["Very Likely", "Likely", "Neutral", "Unlikely", "Very Unlikely"]
    },
    {
      id: 3,
      question: "How often do you use our product?",
      options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"]
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: answer
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log("Survey answers:", answers);
    setIsCompleted(true);

    // TODO: Implement POST request
    
    // fetch('https://api.example.com/survey', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(answers),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log('Success:', data))
    //   .catch((error) => console.error('Error:', error));
    
  };

  if (isCompleted) {
    return (
      <Container className="mt-5">
        <Card>
          <Card.Body>
            <Card.Title as="h2" className="text-center mb-4">Congratulations!</Card.Title>
            <Card.Text className="text-center">
              Thank you for completing our survey. Your feedback is valuable to us!
            </Card.Text>
            <div className="text-center">
              <Button variant="primary" onClick={() => window.location.reload()}>
                Take Another Survey
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  const currentQuestionData = questions[currentQuestion];
  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title as="h2" className="text-center mb-4">Survey</Card.Title>
          <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-4" />
          <Card.Text className="mb-4">{currentQuestionData.question}</Card.Text>
          <Row>
            {currentQuestionData.options.map((option, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
                <Button
                  variant="outline-primary"
                  block
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Survey;