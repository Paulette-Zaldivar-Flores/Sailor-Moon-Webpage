import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "bootstrap/dist/css/bootstrap.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import Moon from "../Images/moon.png";
import Mercury from "../Images/mercury.png";
import Mars from "../Images/mars.png";
import Sailor from "../Images/sailorscouts.png";
import Venus from "../Images/venus.png";
import Jupiter from "../Images/jupiter.png";
import Chibi from "../Images/chibiusa.png";
import Tuxedo from "../Images/tuxedo.png";
import Uranus from "../Images/uranus.png";
import Neptune from "../Images/neptune.png";
import Pluto from "../Images/pluto.png";
import Saturn from "../Images/saturn.png";
class App extends Component {
  onChange = (event) => {
    console.log(event);
  };
  render() {
    return (
      <div className="container carousel-wrapper">
        <Carousel autoPlay="true" onChange={this.onChange} className="carousel">
          <div className="scouts">
            <img className="card-img-top" src={Sailor} alt="sailor-scouts" />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sailor Scouts</h5>
                <p className="card-text">
                  Sailor Guardians (セーラー戦士; Seera Senshi; alternatively
                  meaning "Sailor Senshi," "Sailor Soldier," or "Sailor
                  Warrior") is a term referring to the leading female
                  protagonists of all versions of Sailor Moon.
                </p>
              </div>
            </div>
          </div>
          <div className="moon">
            <img className="card-img-top" src={Moon} alt="sailor-moon" />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sailor Moon</h5>
                <p className="card-text">
                  Usagi Tsukino (月野 うさぎ, Tsukino Usagi, called Serena
                  Tsukino in the original English dub of the first anime
                  adaptation) is the main protagonist of the series. Usagi is a
                  careless fourteen-year-old girl with an enormous capacity for
                  love, compassion, and understanding. Usagi transforms into the
                  heroine called Sailor Moon, the Guardian of Love and Justice.
                </p>
              </div>
            </div>
          </div>
          <div className="mercury">
            <img className="card-img-top " src={Mercury} alt="sailor-mercury" />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sailor Mercury</h5>
                <p className="card-text">
                  Ami Mizuno (水野 亜美, Mizuno Ami, called Amy Anderson in the
                  original English dub) is a quiet but intelligent
                  fourteen-year-old bookworm in Usagi's class with a rumored IQ
                  of 300.[12]: Act 2  She can transform into Sailor Mercury, the
                  Guardian of Water and Wisdom.
                </p>
              </div>
            </div>
          </div>
          <div className="mars">
            <img className="card-img-top" src={Mars} alt="sailor-mars" />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sailor Mars</h5>
                <p className="card-text">
                  Rei Hino (火野 レイ, Hino Rei, called Raye Hino in the
                  original English dub) is an elegant fourteen-year-old miko
                  (English: shrine maiden). Because of her work as a Shinto
                  priestess, Rei has limited precognition and can dispel or
                  nullify evil using special ofuda scrolls, even in her civilian
                  form.[6]: 165–166  She transforms into Sailor Mars, the
                  Guardian of Fire and Passion.
                </p>
              </div>
            </div>
          </div>
          <div className="jupiter">
            <img className="card-img-top" src={Jupiter} alt="sailor-jupiter" />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sailor Jupiter</h5>
                <p className="card-text">
                  Makoto Kino (木野 まこと, Kino Makoto, called Lita Kino in the
                  original English dub) is a fourteen-year-old girl who is a
                  student in Usagi Tsukino's class and was rumoured to have been
                  expelled from her previous school for fighting. Unusually tall
                  and strong for a Japanese schoolgirl,[15]: 12  she transforms
                  into Sailor Jupiter, the Guardian of Thunder and Courage.
                </p>
              </div>
            </div>
          </div>
          <div className="venus">
            <img className="card-img-top" src={Venus} alt="sailor-venus" />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sailor Venus</h5>
                <p className="card-text">
                  Minako Aino (愛野 美奈子, Aino Minako, called Mina Aino in the
                  original English dub) is a fourteen-year-old perky dreamer.
                  Minako first appears as the main protagonist of Codename:
                  Sailor V.[17][18]: Act 9  She has a companion cat called
                  Artemis who works alongside Luna in guiding the Sailor
                  Guardians. Minako transforms into Sailor Venus, the Guardian
                  of Love and Beauty.
                </p>
              </div>
            </div>
          </div>
          <div className="chibi">
            <img className="card-img-top" src={Chibi} alt="sailor-chibi" />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sailor Chibi</h5>
                <p className="card-text">
                  Chibiusa (ちびうさ, Chibiusa, called "Rini" in the original
                  English dub) is the future daughter of Neo-Queen Serenity and
                  King Endymion in the 30th century. She later trains with
                  Sailor Moon to become a Sailor Guardian in her own right, and
                  learns to transform into Sailor Chibi Moon (or "Sailor Mini
                  Moon" in the English series).
                </p>
              </div>
            </div>
          </div>
          <div className="tuxedo">
            <img className="card-img-top" src={Tuxedo} alt="tuxedo" />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tuxedo Mask</h5>
                <p className="card-text">
                  Mamoru Chiba (地場 衛, Chiba Mamoru, called Darien Shields in
                  the original English dub) is a student who is older than
                  Usagi. When he was a young child, Mamoru was in a car accident
                  that killed his parents and erased his memories.[8] He and
                  Usagi share a special psychic connection, and he can sense
                  when she is in danger. This inspires him to take on the guise
                  of Tuxedo Mask and fight alongside the Sailor Guardians when
                  needed.
                </p>
              </div>
            </div>
          </div>
          <div className="pluto">
            <img className="card-img-top" src={Pluto} alt="sailor-pluto" />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sailor Pluto</h5>
                <p className="card-text">
                  Setsuna Meioh (冥王 せつな, Meiō Setsuna, called Trista Meioh
                  in the original English dub) is a mysterious woman who appears
                  first as Sailor Pluto, the Guardian of Spacetime and Change.
                </p>
              </div>
            </div>
          </div>
          <div className="saturn">
            <img className="card-img-top" src={Saturn} alt="sailor-saturn" />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sailor Saturn</h5>
                <p className="card-text">
                  Hotaru Tomoe (土萠 ほたる, Tomoe Hotaru) is a sweet and lonely
                  young girl. A laboratory accident in her youth significantly
                  compromised her health. After overcoming the darkness that has
                  surrounded her family, Hotaru is able to become Sailor Saturn,
                  Guardian of Silence, Destruction, and Rebirth.
                </p>
              </div>
            </div>
          </div>
          <div className="neptune">
            <img className="card-img-top" src={Neptune} alt="sailor-neptune" />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sailor Neptune</h5>
                <p className="card-text">
                  Michiru Kaioh (海王 みちる, Kaiō Michiru, called Michelle
                  Kaioh in the original English dub) is an elegant and talented
                  violinist and painter. Similar to her partner and lover,
                  Haruka Tenoh, she hails from a wealthy family, though they are
                  not mentioned in the series. She is able to transform into
                  Sailor Neptune, Guardian of Ocean and Embrace.
                </p>
              </div>
            </div>
          </div>
          <div className="uranus">
            <img
              className="card-img-top-blue"
              src={Uranus}
              alt="sailor-uranus"
            />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sailor Uranus</h5>
                <p className="card-text">
                  Haruka Tenoh (天王 はるか, Ten'ō Haruka, called Amara Tenoh
                  the original English dub) is a good-natured tomboyish girl who
                  is a year older than most of the other Sailor Guardians. She
                  is able to transform into Sailor Uranus, the Guardian of Sky
                  and Flight.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default App;
