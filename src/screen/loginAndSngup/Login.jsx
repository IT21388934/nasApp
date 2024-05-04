import {
  // MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/nasaSpaceLogo.png";
import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
import { loginSuccess, loginFailure, loginStart } from "../../Redux/userRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(""); // Reset error message
    setLoading(true);
    dispatch(loginStart());
    if (!email || !password) {
      setError("Please fill in all fields");
      dispatch(loginFailure(error));
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      //get user id
      console.log("User logged in");
      dispatch(loginSuccess(email));
      setLoading(false);
      // Redirect to home page
      navigate("/home");
    } catch (error) {
      console.log("Error logging in:", error);
      setError("Invalid email or password");
      dispatch(loginFailure(error));
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <MDBContainer className="p-4 background-radial-gradient overflow-hidden">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Welcome to <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>NASASPACE</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            Explore a universe of knowledge with our curated collection of the
            latest news, awe-inspiring imagery, and real-time updates directly
            from NASA. From groundbreaking discoveries to stunning visuals and
            convenient access to NASAs resources, our platform offers an
            immersive experience for space enthusiasts and curious minds alike.
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="d-flex flex-column p-5">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">
                  <img src={Logo} alt="..." className="w-50" />
                </span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="passwordInput"
                type="password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-danger  text-center">{error}</p>}
              {/* <MDBBtn className="mb-4">Login</MDBBtn> */}
              {loading ? (
                <button className="btn btn-secondary mb-3 w-100 disabled">
                  Loading
                </button>
              ) : (
                <button className="btn btn-primary mb-3" onClick={handleLogin}>
                  Login
                </button>
              )}

              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don&apos;t have an account?{" "}
                <Link to={"/signup"}>Register Here</Link>
              </p>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
