import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/nasaSpaceLogo.png";
import { auth } from "../../firebase"; // Import from firebaseConfig.js
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { useState } from "react";

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const username = `${firstName} ${lastName}`;
  // const [image, setImage] = useState(null);

  const db = getFirestore();
  // console.log(db);

  // const colRef = collection(db, "collection_name");

  const handleSignUp = async () => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created:", user);

      // Add user to database
      const docRef = await addDoc(collection(db, "users"), {
        username: username,
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);

      window.location.href = "/home";
    } catch (error) {
      console.error("Error signing up:", error);
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

          <MDBCard className="my-5 bg-glass ">
            <MDBCardBody className="p-5 ">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-3">
                  <img src={Logo} alt="..." className="w-50" />
                </span>
              </div>
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    id="form1"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last name"
                    id="form2"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form3"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form4"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="I'm agree with the terms and conditions"
                />
              </div>

              <button
                className="btn btn-primary mb-3 w-100"
                onClick={handleSignUp}
              >
                SignUp
              </button>
              <Link to={"/"}>Already have an account?</Link>

              <div className="text-center">
                {/* <p>or sign up with:</p> */}

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Sign;
