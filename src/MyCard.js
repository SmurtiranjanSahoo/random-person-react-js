import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card className="mycard">
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h2>
            <h2 className="pr-2">{details.name?.title + "."}</h2>
            <span className="pr-2">{details.name?.first}</span>
            <span className="pr-2">{details.name?.last}</span>
          </h2>
        </CardTitle>
        <CardText>
          <div>
            <FaMapMarkedAlt className="mx-2" />
            {" " + details.location?.country}
          </div>
          <div>
            <FaEnvelope className="mx-2" />
            {" " + details.email}
          </div>
          <div>
            <FaPhone className="mx-2" />
            {" " + details.phone}
          </div>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
