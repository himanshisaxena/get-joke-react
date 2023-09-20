import "./Joke.css";
import PropTypes from "prop-types";

const Joke = ({ data }) => {
  const isSingle = data.type === "single";
  return (
    <div className="joke">
      <h2>{data.category}</h2>
      {isSingle ? (
        <div>
          <h3>{data.joke}</h3>
        </div>
      ) : (
        <div>
          <h3>{data.setup}</h3>
          <h3>{data.delivery}</h3>
        </div>
      )}

      <div>
        {Object.entries(data.flags).map(([key, value]) => (
          <button className={value ? "red" : "green"} key={key}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

Joke.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.oneOf(["single", "twopart"]).isRequired,
    category: PropTypes.string.isRequired,
    joke: PropTypes.string,
    setup: PropTypes.string,
    delivery: PropTypes.string,
    flags: PropTypes.object,
  }),
};

export default Joke;