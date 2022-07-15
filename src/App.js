import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";
import Background from "./Images/Background.jpeg";
import Creator from "./Components/Creator";
import React, { useState, useEffect } from "react";
import "animate.css";
import { ClipLoader } from "react-spinners";
import Sailor from "./Components/Sailor";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });
  return (
    <div className="App">
      {loading === true ? (
        <div className="loader-container">
          <ClipLoader size={64} color={"#f70776"} loading={loading} />
        </div>
      ) : (
        <header className="Sailor-Moon">
          <NavbarComp />

          <div className="container">
            <header className="Sailor-Moon" />
            <img src={Background} alt="background" className="background" />
            <main>
              <h1 className="heading animate__animated animate__fadeInUp">
                {" "}
                Sailor Moon
              </h1>
              <Sailor />

              <h1 className="heading animate__animated animate__fadeInUp">
                {" "}
                The Creator and Artist
              </h1>
              <Creator />
            </main>
          </div>
        </header>
      )}
    </div>
  );
}

export default App;
