import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuthContext } from "../context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login ,signInwithgoogle,resetPassword} = useUserAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };
  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInwithgoogle();
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(email);
      // navigate("/forgotpassword");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody style={{ height: "100vh" }}>
          <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p
                  classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                  style={{ fontSize: "2.4rem" }}
                >
                  Login{" "}
                </p>

                <div
                  className="d-flex flex-row align-items-center mb-4"
                  style={{ fontSize: "1.4rem" }}
                >
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    style={{ fontSize: "1.8rem" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div
                  className="d-flex flex-row align-items-center mb-4"
                  style={{ fontSize: "1.4rem" }}
                >
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Password"
                    id="form3"
                    type="password"
                    style={{ fontSize: "1.8rem" }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <MDBBtn
                  className="mb-4"
                  size="lg"
                  style={{ fontSize: "1.2rem" }}
                >
                  LogIn
                </MDBBtn>
                <MDBBtn
                  className="mb-4"
                  size="lg"
                  style={{ fontSize: "1.2rem" }}
                  color='tertiary' rippleColor='light'
                  onClick={handleForgotPassword}
                >
                  Forgot Password
                </MDBBtn>
                <hr
                  style={{ height: "2px", width: "50%", background: "black" }}
                />
                <MDBBtn
                  className="mb-4"
                  size="lg"
                  style={{ fontSize: "1.2rem" }}
                  onClick={handleSignInWithGoogle}
                >
                  <MDBRow>
                    <MDBCol md="3" style={{ background: "white" }}>
                      <img
                        src="assets/googleLogo.png"
                        alt="google"
                        style={{ height: "40px", width: "40px" }}
                      />
                    </MDBCol>

                    <MDBCol md="9">Sign in with Google</MDBCol>
                  </MDBRow>
                </MDBBtn>
                <div
                  className="d-flex flex-row align-items-center mb-4"
                  style={{ fontSize: "1.4rem" }}
                >
                  Don't have an account
                  <Link to="/signup">
                    <span style={{ color: "blue", marginLeft: "5px" }}>
                      Create Account
                    </span>
                  </Link>
                </div>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
