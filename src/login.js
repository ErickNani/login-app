import React, { useState } from "react";

const Login = () => {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: Login, 2: OTP Verification
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [error, setError] = useState("");

  // Test credentials
  const testEmail = "test@example.com";
  const testPassword = "password123";

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === testEmail && password === testPassword) {
      // Generate OTP (mocked)
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(otp);
      console.log("Generated OTP:", otp); // Simulates sending OTP to user
      setStep(2); // Move to OTP verification step
      setError("");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  // Function to handle OTP verification
  const handleOtpVerification = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      alert("Login successful!");
      setError("");
      // Perform post-login actions (e.g., redirect)
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      {step === 1 && (
        <form onSubmit={handleLogin} style={styles.form}>
          <h2 style={styles.title}>Login</h2>
          {error && <p style={styles.error}>{error}</p>}
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Log In</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOtpVerification} style={styles.form}>
          <h2 style={styles.title}>Verify OTP</h2>
          {error && <p style={styles.error}>{error}</p>}
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="otp">Enter OTP</label>
            <input
              type="text"
              id="otp"
              style={styles.input}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Verify</button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  form: {
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    textAlign: "center",
    marginBottom: "15px",
  },
};

export default Login;
