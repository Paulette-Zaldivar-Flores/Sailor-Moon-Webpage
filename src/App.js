import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";
import Background from "./Images/Background.jpg";
import Creator from "./Components/Creator";
import React, { useState, useEffect } from "react";
import "animate.css";
import { ClipLoader } from "react-spinners";
import Sailor from "./Components/Sailor";
import Title from "./Images/title.png";
import Carousel from "./Components/Carousel";

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
            <img src={Background} alt="background" className="background" />
            <main>
              <div className="title">
                <img
                  src={Title}
                  alt="title"
                  className="animate__animated animate__fadeInUp"
                />
              </div>
              <section className="sailor-image">
                <Sailor />
              </section>

              <h1 className="heading"> The Creator and Artist</h1>
              <Creator />

              <h1 className="heading"> Sailor Scouts </h1>
              <Carousel />
            </main>
          </div>
        </header>
      )}
    </div>
  );
}

export default App;
