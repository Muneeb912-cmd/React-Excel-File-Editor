import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function LoginSignup() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: 'url("/bg.jpg")',
        backgroundSize: 'cover', // Optional: Adjust the background size
        backgroundPosition: 'center', // Optional: Adjust the background position
        // You can add more styling properties as needed
      }}
    >
      <MDBCard
        style={{
          maxWidth: "800px",
          width: "100%", // Set the width to 100% to allow responsiveness
          margin: "0 auto", // Center the card horizontally
          boxSizing: "border-box", // Include padding and border in the width
        }}
      >
        <MDBCardBody>
          <h1 style={{textAlign:"center"}}>Website Title</h1>
          <hr />
          <MDBContainer>
            <MDBTabs
              pills
              justify
              className="mb-3 d-flex flex-row justify-content-between"
            >
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab1")}
                  active={justifyActive === "tab1"}
                >
                  Login
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab2")}
                  active={justifyActive === "tab2"}
                >
                  Register
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={justifyActive === "tab1"}>
                <div className="text-center mb-3">
                  <p>Sign in with:</p>

                  <div
                    className="d-flex justify-content-between mx-auto"
                    style={{ width: "40%" }}
                  >
                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="facebook-f" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="twitter" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="google" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="github" size="sm" />
                    </MDBBtn>
                  </div>

                  <p className="text-center mt-3">or:</p>
                </div>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="form1"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                />

                <div className="d-flex justify-content-between  mb-4">
                  <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
                <p className="text-center">
                  Not a member? <a href="#!">Register</a>
                </p>
              </MDBTabsPane>

              <MDBTabsPane show={justifyActive === "tab2"}>
                <div className="text-center mb-3">
                  <p>Sign un with:</p>

                  <div
                    className="d-flex justify-content-between mx-auto"
                    style={{ width: "40%" }}
                  >
                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="facebook-f" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="twitter" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="google" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-1"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="github" size="sm" />
                    </MDBBtn>
                  </div>

                  <p className="text-center mt-3">or:</p>
                </div>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  id="form1"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Username"
                  id="form1"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type="password"
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    label="I have read and agree to the terms"
                  />
                </div>

                <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBContainer>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default LoginSignup;
