import React, { useState } from "react";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email harus diisi.");
      return;
    }

    // Dummy validation & submission
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Format email tidak valid.");
      return;
    }

    // Simulasi pengiriman kode
    setSubmitted(true);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}></div>
      <main style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.box}>
          <h1 className="text-2xl font-bold mb-4 text-center">
            Recover Your Password
          </h1>
          {!submitted ? (
            <>
              <p style={styles.text}>
                Enter your email to get the recovery code
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
              <button type="submit" style={styles.button}>
                Send Code
              </button>
            </>
          ) : (
            <p style={styles.success}>
              Recovery code has been sent to <strong>{email}</strong>. Please check your email
            </p>
          )}
        </form>
      </main>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "relative",
    height: "100vh",
    backgroundImage: "url('/images/team.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
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
    height: "100%",
    paddingTop: "10vh",
  },
  box: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    margin: "1rem 0",
    borderRadius: "6px",
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
  },
  text: {
    fontSize: "0.95rem",
    color: "#555",
  },
  success: {
    fontSize: "1rem",
    color: "#3366cc",
    marginTop: "1rem",
  },
};

export default RecoverPassword;
