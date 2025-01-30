import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
    });
    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); 
      sessionStorage.setItem("signupMessage", "SignOut successful!");
      navigate("/", { replace: true }); // Redirect to homepage
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary mx-5 px-2"
      style={{
        fontFamily: "sans-serif",
        fontSize: "0.85rem",
      }}
    >
      <div
        className="container-fluid d-flex align-items-center justify-content-between"
        style={{
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          margin: "0 auto",
        }}
      >
        <Link className="navbar-brand" to="/">
          <img src="/assets/logo.svg" alt="Logo" style={{ width: "120px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          style={{
            border: "none",
            outline: "none",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{
            width: "70%",
            maxWidth: "70%",
          }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard/">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    {/* Handle Sign Out */}
                    <Link
                      className="nav-link active"
                      to="/"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSignOut();
                      }}
                    >
                      Sign Out
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">
                    Signup
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
