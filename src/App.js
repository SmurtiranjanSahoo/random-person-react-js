import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Axios from "axios";
import MyCard from "./MyCard";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");

    const details = data.results[0];
    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  // webpage title
  document.title = "Random User";

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details} />

          <div className="btn">
            <Button
              size="lg"
              className="bg-dark"
              onClick={() => {
                fetchDetails();
              }}
            >
              Get Random User
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
