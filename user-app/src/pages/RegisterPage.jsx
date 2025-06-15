import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullname) newErrors.fullname = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Password confirmation is required";

    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password is not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success
    setSuccess(true);
    setTimeout(() => {
      navigate("/");
    }, 2000); // Redirect ke home setelah 2 detik
  };

  return (
    <div style={styles.page}>
      <div style={styles.background}></div>
      <div style={styles.overlay}></div>

      <main style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.loginBox}>
          <h1 className="text-2xl font-bold text-center">
            <strong>Welcome !<br />Create Account</strong>
          </h1>

          {success && <div style={styles.successBox}>Account succesfully created! redirect to home...</div>}

          <div>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.fullname && <div style={styles.errorText}>{errors.fullname}</div>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <div style={styles.errorText}>{errors.email}</div>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.password && <div style={styles.errorText}>{errors.password}</div>}
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.confirmPassword && <div style={styles.errorText}>{errors.confirmPassword}</div>}
          </div>

          <button type="submit" style={styles.button}>Register</button>

          <p style={styles.register}>
            Already have an account? <a href="/login" style={styles.linkBlue}>Sign In</a>
          </p>
        </form>
      </main>
    </div>
  );
};

const styles = {
  page: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    fontFamily: "'Segoe UI', sans-serif",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "url('/images/team.png') no-repeat center center fixed",
    backgroundSize: "cover",
    filter: "contrast(0.7)",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: 1,
  },
  container: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100%",
    paddingTop: "8vh",
  },
  loginBox: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "10px",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
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
  register: {
    fontSize: "0.9rem",
    marginTop: "1rem",
  },
  linkBlue: {
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

export default RegisterPage;
