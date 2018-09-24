sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, History, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.sap.teched.spacetravelagency.controller.AddBooking", {

	createBooking: function () {
			var oView = this.getView();
			var oModel = oView.getModel();
			var oBooking = {};
			oBooking.BookingNo = oView.byId("bookingNoInput").getValue();
			oBooking.Customer_ID = oView.byId("searchCustomersField").getSelectedKey() ;
			oBooking.Itinerary_ID = oView.byId("searchItineraryField").getSelectedKey();
			oBooking.DateOfTravel = "/Date(1537466259000)/"; //ToDo: Temp solution
			//oBooking.DateOfTravel = oView.byId("dateOfTravelDP").getValue();
			oBooking.NumberOfPassengers = parseInt(oView.byId("numberOfPassengersInput").getValue());
			oBooking.Meal = oView.byId("mealTypeSelect").getSelectedItem().getText();
			oBooking.Class = oView.byId("ticketTypeSelect").getSelectedItem().getText();
			oBooking.Cost = (oBooking.NumberOfPassengers * 130688.16).toString();//ToDo: Use Ticket Type 
			oModel.create('/Bookings', oBooking, null, function () {
					sap.m.MessageToast.show("Success!");
			}, function () {
				sap.m.MessageToast.show("Error!");
			});
			this.goBack();
		},
		goBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("object", true);
			}
		}

	});

});