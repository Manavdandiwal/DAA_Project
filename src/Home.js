import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="heading">Welcome</h1>
      <Link to="/LCS" className="button">
        LCS
      </Link>
      <Link to="/knapsack" className="button">
        0 1 Knapsack
      </Link>
    </div>
  );
};

export default Home;
