// ---------------------------------------------------------------------------------------------------------------------
// Reference the entire base data model found in https://github.com/SAP/cloud-sample-spaceflight
//
// See the "consumeRemoteDataModel.md" file in the "./docs" folder for an explanation of how the data model in one
// repository can be referenced from another repository
// ---------------------------------------------------------------------------------------------------------------------

namespace teched.flight.customers;

using teched.flight.trip as flight from 'spaceflight-model/db';
using common.Managed from 'spaceflight-model/db/common';

entity Customers : Managed {
      CustomerName : String(50);
      EmailAddress : String(50);
      PassportNumber : String(15);
      Age : Integer;
      Gender : String(10);
      Nationality : String(50);
      Phone : String(15);
      Address: String(100);
};

extend flight.Bookings {
    Customer : Association to Customers;
    Class : String(15);
    Meal : String(15);
};
