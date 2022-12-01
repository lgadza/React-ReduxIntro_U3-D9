import { Container, Row, Col, Button, Card } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

const Favourite = () => {
  const favourite = useSelector((state) => state.favourite.content);
  const dispatch = useDispatch();
  return (
    <Container className="justify-content-center">
      <Row>
        <Col sm={12} className="justify-content-center text-center">
          <h4>My Favourite Companies</h4>
          <ul style={{ listStyle: "none" }}>
            {favourite.map((company, i) => (
              <Card>
                <Card.Body key={i}>
                  <Card.Title>{company.company_name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {company.title}
                  </Card.Subtitle>
                  <Card.Text>Category: {company.category}</Card.Text>

                  <Card.Text> {company.candidate_required_location}</Card.Text>

                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITE",
                        payload: i,
                      });
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default Favourite;
