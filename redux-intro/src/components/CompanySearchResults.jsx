import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { Heart } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?company=";

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <>
              <Job key={jobData._id} data={jobData} />
              <p>
                <Button
                  className="likeBtn "
                  variant="outline-danger"
                  onClick={() => {
                    console.log(jobData);
                    dispatch({
                      type: "ADD_TO_FAVOURITE",
                      payload: jobData,
                    });
                  }}
                >
                  <Heart size="10" className="heart heart-fill" />
                </Button>
              </p>
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
