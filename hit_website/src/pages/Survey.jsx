import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, ProgressBar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import posthog from 'posthog-js'

const Survey = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const location = useLocation();

  const [misclickCount, setMisclickCount] = useState(0);
  const [siteVersion, setSiteVersion] = useState("American")

  useEffect(() => {
    posthog.init('phc_iBF0PfaKlfplDqP63pRgv1Or8eOxB6GmydTuYXq8HMb',
      {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
      }
    )

  }, []);

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
      question: "How would you rate your overall experience on the website? (1 = Not satisified, 5 = Very satisified)",
      options: ["1","2","3","4","5"]
    },
    {
      id: 2,
      question: "How easy was it to navigate through the website and accomplish your task? (1 = Not satisified, 5 = Very satisified)",
      options: ["1","2","3","4","5"]
    },
    {
      id: 3,
      question: "How visually appealing did you find the website's design? (1 = Not satisified, 5 = Very satisified)",
      options: ["1","2","3","4","5"]
    },
    {
      id: 4,
      question: "How intuitive was the layout and structure of the website? (1 = Not satisified, 5 = Very satisified)",
      options: ["1","2","3","4","5"]
    }
  ];

  const handleAnswer = (answer) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit([...answers, answer]);
    }

    setAnswers(answers => [
      ...answers, answer
    ]);
  };

  const handleSubmit = (answers) => {
    console.log("Survey answers:", answers);
    setIsCompleted(true);


    const surveyData = {
      answers,
      currentQuestion,
      isCompleted: true,
      misclickCount,
      siteVersion
    };

    // Send data to PostHog
    posthog.capture('Survey Completed', surveyData);

    // Send data via POST request
    fetch('https://3pn2cncibc.execute-api.ap-northeast-1.amazonaws.com/default/testFunction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(surveyData),
    })
      .then(response => response.json())
      .then(data => console.log('POST request success:', data))
      .catch((error) => console.error('POST request error:', error));

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
              <Col key={index} >
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