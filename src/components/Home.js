import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <h2>Quiz Time</h2>
      <div className="navBar">
        <Link to="/question_creation">Question Creation</Link>
        <Link to="/question_list">Question List</Link>
      </div>
    </div>
  );
};

export default Home;
