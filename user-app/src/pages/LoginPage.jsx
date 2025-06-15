import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    localStorage.setItem("authToken", "dummy-token");

    setSuccess(true);
    setErrors({});
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}></div>

      <main style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.loginBox}>
          <h1 className="text-2xl font-bold text-center">
            <strong>Hello !<br />Welcome Back</strong>
          </h1>

          {success && <div style={styles.successBox}>Login succesfully! redirect to home...</div>}

          <div>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              style={styles.input}
            />
            {errors.email && <div style={styles.errorText}>{errors.email}</div>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
              style={styles.input}
            />
            {errors.password && <div style={styles.errorText}>{errors.password}</div>}
          </div>

          <div style={styles.recover}>
            <a href="/recover" style={styles.recoverLink}>Recover Password?</a>
          </div>

          <button type="submit" style={styles.button}>Sign In</button>

          <p style={styles.or}>Or sign in with</p>

          <a href="/auth/google" style={styles.googleButton}>
            <img
              src="https://img.icons8.com/color/16/google-logo.png"
              alt="Google"
              style={{ marginRight: "8px" }}
            />
            Sign in with Google
          </a>

          <p style={styles.register}>
            Don’t have an account? <a href="/register" style={styles.link}>Create Account!</a>
          </p>
        </form>
      </main>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "relative",
    height: "100vh",
    width: "100%",
    backgroundImage: "url('/images/team.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  container: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "5vh",
    height: "100%",
  },
  loginBox: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "10px",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    marginBottom: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#3366cc",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "0.5rem",
  },
  recover: {
    textAlign: "right",
    fontSize: "0.85rem",
    marginBottom: "1rem",
  },
  recoverLink: {
    color: "#3366cc",
    textDecoration: "none",
    fontWeight: "bold",
  },
  or: {
    margin: "1rem 0 0.5rem",
    fontSize: "0.85rem",
    color: "#777",
  },
  googleButton: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#fff",
    color: "#333",
    fontWeight: "bold",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  register: {
    fontSize: "0.9rem",
    marginTop: "1rem",
  },
  link: {
    color: "#3366cc",
    fontWeight: "bold",
    textDecoration: "none",
  },
  errorText: {
    color: "red",
    fontSize: "0.8rem",
    textAlign: "left",
    marginBottom: "0.5rem",
  },
  successBox: {
    backgroundColor: "#d4edda",
    color: "#155724",
    padding: "0.75rem",
    borderRadius: "5px",
    marginBottom: "1rem",
    border: "1px solid #c3e6cb",
    textAlign: "center",
  },
};

export default Login;
