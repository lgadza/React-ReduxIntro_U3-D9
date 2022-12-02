import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Heart } from "react-bootstrap-icons";

const FavourateIndicator = () => {
  const navigate = useNavigate();

  const favourateLength = useSelector(
    (store) => store.favourite.content.length
  );

  return (
    <div className="ml-auto mt-3 mb-4">
      <Button
        color="danger"
        className="likeMe"
        onClick={() => navigate("/ favourite")}
      >
        <Heart size="10" className="heart heart-fill" />

        <span className="ml-2">{favourateLength}</span>
      </Button>
    </div>
  );
};

export default FavourateIndicator;
