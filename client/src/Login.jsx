import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const styles = {
    container: {
      backgroundImage: `url("https://i.pinimg.com/564x/9c/85/78/9c85786437d7abed5b16964b8350fd79.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100%",
      display: "flex", // Enables vertical centering of content (optional)
      flexDirection: "column", // Stacks content vertically (optional)
      justifyContent: "center", // Centers content vertically within the container (optional)
      alignItems: "center", // Centers content horizontally within the container (optional)
    },
  };
  // const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // const navigate = useNavigate();
    axios
      .post("http://localhost:3001/login", { name, email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Login Successfull") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div style={styles.container}>
        <div className="d-flex justify-content-center align-items-center  vh-100 vw-100">
          <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  className="form-control rounded-10"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  className="form-control rounded-10"
                  placeholder="Enter Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary rounded-10">
                Login
              </button>
            </form>
            <p>Already have an account</p>

            <Link
              to="/register"
              className="btn btn-default border w-100 bg-light rounded-10 text-decoration-none"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
