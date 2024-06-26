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
    navbar: {
      backgroundColor: "#191b5b", // Royal blue
      color: "white", // Light text for contrast
      padding: "1rem 1.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navbarBrand: {
      fontSize: "1.2rem", // Slightly larger font for brand name
      fontWeight: "bold", // Add boldness for emphasis
    },
    navLink: {
      textDecoration: "none",
      color: "inherit", // Inherit color from navbar
      marginRight: "1.5rem", // Spacing between links
      transition: "color 0.2s ease-in-out", // Smooth hover effect
    },
    navLinkActive: {
      color: "#2942C8", // Darker royal blue for active link
    },
    navBtn: {
      backgroundColor: "#EB370F", // Darker royal blue for button
      color: "white",
      padding: "0.75rem 1.5rem", // Adjust padding for button size
      borderRadius: "5px", // Rounded corners for aesthetics
      transition: "background-color 0.2s ease-in-out", // Smooth button hover effect
    },
    navBtnHover: {
      backgroundColor: "#3f5baf", // Slightly darker blue on hover
    },
  };
  // const styles = {
  //   navbar: {
  //     backgroundColor: "#f8f9fa",
  //     padding: "10px 0",
  //     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  //   },
  //   navbarBrand: {
  //     fontWeight: "bold",
  //     color: "#333",
  //   },
  //   navBtn: {
  //     color: "#333",
  //     textDecoration: "none",
  //   },
  //   container: {
  //     backgroundColor: "#f8f9fa",
  //     height: "100vh",
  //   },
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    try {
      const response = await axios.post(
        "https://vqwj9lgw-3001.inc1.devtunnels.ms//login",
        {
          email,
          password,
        }
      );
      if (response.data === "Login Successfull") {
        navigate("/home");
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred while logging in");
    }
  };

  return (
    <>
      {/* Your navigation bar JSX */}
      <nav style={styles.navbar}>
        <a href="#" className="navbar-brand" style={styles.navbarBrand}>
          Chronicles
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <a className={nav-link ${styles.navLinkActive}} href="#">
              Home
            </a> */}
          </li>
          {/* Add more links here as needed */}
        </ul>
        <Link to="/" style={styles.navBtn}>
          Home
        </Link>
      </nav>
      <div style={styles.container}>
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
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
                  value={email}
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
                  value={password}
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
