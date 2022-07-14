import React from "react";
import "./Creator.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import Naoko from "../Images/naoko-t.png";

function Creator() {
  return (
    <Card className="m-3 shadow card-naoko">
      <Row className="no-gutters">
        <Col sm={4} lg={3}>
          <Card.Img
            className="fluid-rounded card-img"
            variant="top"
            src={Naoko}
          />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>Naoko Takeuchi</Card.Title>
            <Card.Text>
              Naoko Takeuchi is a manga writer and artist who is best known for
              being the creator of Sailor Moon and Codename: Sailor V and
              several other mangas such as Prism Time, Chocolate Christmas,
              Maria, The Cherry Project, Miss Rain, PQ Angels, Love Witch, etc.
              <br />
              <br />
              <strong>Fun Facts</strong>: Naoko Takeuchi used much of her own
              personal life as an influence for the Sailor Moon franchise. She
              based Usagi's immediate family off her own. All members of Usagi's
              family are named members of Takeuchi's family. Takeuchi's parents
              are Ikuko and Kenji, the same names for Usagi's parents. Takeuchi
              also has a younger brother named Shingo, which is the same name as
              Usagi's younger brother. Naoko Takeuchi earned a degree in
              Chemistry, which is why many Sailor Moon characters are named
              after minerals and gemstones. Examples include Jadeite, Nephrite,
              and Beryl. The neighborhood Usagi lives in was based on the
              neighborhood Takeuchi grew up in.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
export default Creator;
