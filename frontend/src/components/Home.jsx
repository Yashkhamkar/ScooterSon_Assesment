import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div style={styles.container}>
      <h2>Welcome to the Homepage</h2>

      <div style={styles.buttonContainer}>
        <Link to="/create-product" style={styles.button}>
          Create Product
        </Link>

        <Link to="/my-profile" style={styles.button}>
          My Profile
        </Link>
        <button
          style={styles.button}
          onClick={() => {
            localStorage.removeItem("userInfo");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
  },
};

export default Home;
