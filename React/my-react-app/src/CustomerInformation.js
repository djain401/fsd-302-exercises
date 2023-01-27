import React from "react";

const CustomerInformation = (props) => {
  const { customer } = props;
  return (
    <div>
      <h1>First Name: {customer.firstName}</h1>
      <h1>Last Name: {customer.lastName}</h1>
    </div>
  );
};

export default CustomerInformation;
