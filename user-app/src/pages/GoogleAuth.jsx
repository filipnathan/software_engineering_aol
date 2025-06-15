import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const [step, setStep] = useState(1);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleAccountClick = (email) => {
    setSelectedEmail(email);
    setStep(2);
  };

  const handleLogin = () => {
    if (password === "password123") {
      localStorage.setItem("authToken", "dummy-token");

      setSuccess(true);
      setError("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setError("Password salah. Silakan coba lagi.");
      setPassword("");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}></div>
      <main style={styles.container}>
        <div style={styles.authBox}>
          {step === 1 ? (
            <>
              <h1 className="text-2xl font-bold text-center mb-4">
                <strong>Login with Google</strong>
              </h1>
              <p className="text-center mb-2 text-gray-600">Choose Account</p>
              <div style={styles.accountList}>
                {["user1@gmail.com", "user2@gmail.com"].map((email, idx) => (
                  <div
                    key={idx}
                    style={styles.accountItem}
                    onClick={() => handleAccountClick(email)}
                  >
                    <img
                      src="https://img.icons8.com/color/48/user.png"
                      alt="User"
                      style={styles.avatar}
                    />
                    <div>
                      <p style={styles.email}>{email}</p>
                      <p style={styles.name}>User {idx + 1}</p>
                    </div>
                  </div>
                ))}
                <div style={styles.accountItem}>
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/plus-math.png"
                    alt="Add"
                    style={styles.avatar}
                  />
                  <p style={styles.email}>Use Another account</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-xl font-bold text-center mb-4">
                You log back with google
              </h1>
              <p className="text-center text-gray-600">{selectedEmail}</p>

              {success && (
                <div style={styles.successBox}>
                  Login succesfully! Redirect to home...
                </div>
              )}

              <input
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                style={styles.input}
              />
              {error && <p style={styles.error}>{error}</p>}

              <div className="flex justify-center mt-4 gap-3">
                <button style={styles.buttonOutline} onClick={() => setStep(1)}>
                  Cancel
                </button>
                <button style={styles.button} onClick={handleLogin}>
                  Continue
                </button>
              </div>
            </>
          )}
        </div>
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
    paddingTop: "18vh",
    height: "100%",
  },
  authBox: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "10px",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  accountList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
  },
  accountItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0.75rem 1rem",
    border: "1px solid #ddd",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  avatar: {
    width: "40px",
    height: "40px",
  },
  email: {
    fontWeight: "bold",
    margin: 0,
  },
  name: {
    fontSize: "0.85rem",
    color: "#777",
    margin: 0,
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    marginTop: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  error: {
    color: "red",
    marginTop: "0.5rem",
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
  button: {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#1a73e8",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonOutline: {
    padding: "0.6rem 1.2rem",
    backgroundColor: "white",
    color: "#1a73e8",
    border: "1px solid #1a73e8",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default GoogleAuth;
