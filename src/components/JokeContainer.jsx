import "./JokeContainer.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Loading from "./Loading";
import Joke from "./Joke";

const JokeContainer = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [joke, setJoke] = useState(null);
  const [count, setCount] = useState(0);

  // api
  useEffect(() => {
    const getJoke = async () => {
      try {
        const res = await axios.get("https://v2.jokeapi.dev/joke/Any");

        if (res.status === 200) {
          setJoke(res.data);
        } else {
          throw new Error(`Failed to fetch data ith status: ${res.status}`);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getJoke();
  }, [count]);

  // handler
  const changeJokeHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const isJoke = joke === null;

  return (
    <>
      <header className="title">
        <h1>JOKE</h1>
      </header>
      <div className="bo">
        <button className="btn-joke" onClick={changeJokeHandler} type="submit">
          Get a joke
        </button>

        {isLoading && <Loading />}
        {error && <p>{error}</p>}
        {isJoke ? <div></div> : <Joke data={joke} />}
      </div>
    </>
  );
};

export default JokeContainer;