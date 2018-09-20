
using teched.flight.trip as flight from 'spaceflight-model/db/space-model';
using teched.space.trip as space from 'spaceflight-model/db/space-model';
using teched.flight.customers as customers from '../db';

service BookingService {

    entity Bookings    as projection on flight.Bookings;
    entity Itineraries as projection on flight.Itineraries;
    entity Customers as projection on customers.Customers;

    @readonly entity EarthRoutes   as projection on flight.EarthRoutes;
    @readonly entity Airports      as projection on flight.Airports;
    @readonly entity Airlines      as projection on flight.Airlines;
    @readonly entity AircraftCodes as projection on flight.AircraftCodes;

    @readonly entity SpaceRoutes as projection on space.SpaceRoutes;
    @readonly entity Spaceports  as projection on space.Spaceports;
    @readonly entity Spacelines  as projection on space.SpaceFlightCompanies;
    @readonly entity Planets     as projection on space.AstronomicalBodies;

}