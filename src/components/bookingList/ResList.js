import React from "react";

//styles
import { Wrapper, Content, Text } from "./ResList.styles";

const ResList = ({ reservations }) => {
  return reservations.map((reservation) => (
    <Wrapper key={reservation._id}>
      <Content>
        <Text className="text_name">
          Resv: {" " + reservation.reservationNumber + "   /*"}
          {reservation.customer.lastName + " "}
          {reservation.customer.firstName + "*/ "}
        </Text>
        <Text className="text_date">
          {reservation.reservationRecords.map((record) => {
            return (
              <div key={record._id}>
                <div>
                  Checkin:{" "}
                  {record.checkIn
                    .toLocaleString()
                    .split(/\D/)
                    .slice(0, 3)
                    .map((num) => num.padStart(2, "0"))
                    .join("/")}
                </div>
                <div></div>
                <div>
                  Checkout:{" "}
                  {record.checkOut
                    .toLocaleString()
                    .split(/\D/)
                    .slice(0, 3)
                    .map((num) => num.padStart(2, "0"))
                    .join("/")}
                </div>
              </div>
            );
          })}
        </Text>
      </Content>
    </Wrapper>
  ));
};

export default ResList;
