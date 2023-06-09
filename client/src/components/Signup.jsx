import React,{useState} from "react";
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
import { Link,useNavigate } from "react-router-dom";
import { useUserAuthContext } from "../context/UserAuthContext"; 

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  
  const {signup}=useUserAuthContext();
   const navigate=useNavigate();

  const handleSubmit =async(e) => {
    e.preventDefault();
    setError("");
    try{
      await signup(email,password);
      navigate("/");
  
    }catch(err){
      console.log(err);
      setError(err.message);
    }
    
  }
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
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
                SignUp{" "}
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

              <div className="d-flex flex-row align-items-center mb-4"
               style={{ fontSize: "1.4rem" }}
              >
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="form4"
                  type="password"
                  style={{ fontSize: "1.8rem" }}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>

              <MDBBtn 
              className="mb-4" 
              size="lg" 
              style={{ fontSize: "1.2rem" }} 
              // onSubmit={handleSubmit}
              >
              Sign Up
              </MDBBtn>

              <div className="d-flex flex-row align-items-center mb-4" style={{fontSize:"1.4rem"}}>Already have an account 
             <Link to="/">
                <span style={{color:"blue",marginLeft:"5px"}}>
                  Login</span>
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

export default Signup;
