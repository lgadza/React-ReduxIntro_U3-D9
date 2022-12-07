import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { setMainSearchActionAsync } from "../redux/actions";
import { mainSearch } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();
  const searchRes = useSelector((state) => state.job.search);
  console.log(searchRes.data[0]);
  const areResultsError = useSelector((state) => state.jobSearch.isError);
  const areResultsLoading = useSelector((state) => state.jobSearch.isLoading);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setMainSearchActionAsync(query));
    dispatch(mainSearch(searchRes));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {query && (
          <>
            <Col xs={10} className="mx-auto mb-5">
              {areResultsLoading && (
                <Spinner animation="border" variant="danger" className="ml-5" />
              )}
              {searchRes.data.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
