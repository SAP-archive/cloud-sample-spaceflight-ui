// ---------------------------------------------------------------------------------------------------------------------
// Reference the entire base data model found in https://github.com/SAP/cloud-sample-spaceflight
//
// See the "consumeRemoteDataModel.md" file in the "./docs" folder for an explanation of how the data model in one
// repository can be referenced from another repository
// ---------------------------------------------------------------------------------------------------------------------

namespace teched.flight.customers;

using teched.flight.trip as flight from 'spaceflight-model/db';

entity Customers   {
      key ID    : String(10);    // e.g. "20180726/GA1B6"
      CustomerName : String(50);
      EmailAddress : String(50);
      PassportNumber : Integer;
};

extend flight.Bookings {
    Customer  : Association to Customers;
};
