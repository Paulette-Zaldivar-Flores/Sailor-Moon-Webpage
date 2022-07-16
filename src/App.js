import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";
import Background from "./Images/Background.png";
import Creator from "./Components/Creator";
import React, { useState, useEffect } from "react";
import "animate.css";
import { ClipLoader } from "react-spinners";
import Sailor from "./Components/Sailor";
import Title from "./Images/title.png";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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

            <main>
              <img src={Background} alt="background" className="background" />
              <div className="title">
                <img
                  src={Title}
                  alt="title"
                  className="animate__animated animate__fadeInUp"
                />
              </div>
              <Sailor />

              <h1 className="heading"> The Creator and Artist</h1>
              <Creator />
            </main>
          </div>
        </header>
      )}
    </div>
  );
}

export default App;
