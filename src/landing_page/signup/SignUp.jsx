import { useState } from "react";
import { auth } from "../../../config/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

 
    const handleCreateUser = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      setError("");
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Store success message in sessionStorage
        sessionStorage.setItem("signupMessage", "SignUp successful!");
        navigate("/", { replace: true }); // Redirect to homepage
        window.scrollTo(0, 0); 
      } catch (err) {
        setError(err.message);
      }
    };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Register your Account</h2>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleCreateUser}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="form-check-input"
              required
            />
            <label htmlFor="terms" className="form-check-label">
              I agree to the <a href="#">Terms and Conditions</a>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Register
          </button>
        </form>
        <Link to="/signin">
          <button
            type="submit"
            style={{ margin: "0 auto", textDecoration: "none" }}
            className="btn w-100 btn-primary mt-3 fs-6  "
          >
            Signin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
