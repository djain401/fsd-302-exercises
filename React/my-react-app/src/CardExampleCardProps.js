import { React } from "react";
import { Card, Icon } from "semantic-ui-react";
import { faker } from "@faker-js/faker";

const extra = (
  <>
    <a>
      <Icon name="user" />
      {faker.datatype.number(100)} Friends
    </a>
    <span className="date">Joined in 2015</span>
  </>
);

const fullName = faker.name.fullName();
const firstName = fullName.split(" ")[0];

const CardExampleCardProps = () => (
  // <Card
  //   image={faker.image.avatar()}
  //   header={faker.person.fullName()}
  //   meta="Friend"
  //   description={
  //     faker.person.firstName() +
  //     "is a " +
  //     faker.person.jobTitle() +
  //     "living in " +
  //     faker.location.cityName() +
  //     "who enjoys playing guitar and hanging with his cat."
  //   }
  //   extra={extra}
  // />

  <Card
    image={faker.image.avatar()}
    header={fullName}
    meta="Friend"
    description={
      firstName +
      " is a " +
      faker.name.jobTitle() +
      " living in " +
      faker.address.cityName() +
      " who enjoys playing guitar and hanging with his cat."
    }
    extra={extra}
  />
);

export default CardExampleCardProps;
