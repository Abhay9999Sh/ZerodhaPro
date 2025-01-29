import { useState } from "react";
import { auth } from "../../../config/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "bootstrap/dist/css/bootstrap.min.css"; // Uncomment if needed
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Get Firebase ID Token
      const token = await user.getIdToken();

      // Optionally, store the token in localStorage (useful for persistent sessions)
      localStorage.setItem("firebase_token", token);

      // Navigate to the dashboard with the token in the URL (or use localStorage)
      navigate(`/`);
      alert("Signed in successfully");
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
        <h2 className="text-center mb-4">Sign In to Your Account</h2>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSignIn}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
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
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Sign In
          </button>
        </form>

        <Link to="/signup">
          <button
            type="submit"
            style={{ margin: "0 auto", textDecoration: "none" }}
            className="btn w-100 btn-primary mt-3 fs-6  "
          >
            Create New Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
