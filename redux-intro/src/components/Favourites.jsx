import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

const Favourite = () => {
  const favourite = useSelector((state) => state.favourite.favourite.content);
  const dispatch = useDispatch();
  return (
    <Container className="justify-content-center">
      <Row className="justify-content-center text-center">
        <Col sm={12} md={6} className="justify-content-center text-center">
          <h4>My Favourite Companies</h4>
          <ul style={{ listStyle: "none" }}>
            {favourite.map((company, i) => (
              <Card className=" my-4">
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
                <div className="mb-3">
                  <Badge className="success" bg="success">
                    #{i + 1}
                  </Badge>
                </div>
              </Card>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default Favourite;
