sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, History, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.sap.teched.spacetravelagency.controller.AddCustomer", {

		onInit: function () {
			var oModel = new JSONModel();
			oModel.loadData(jQuery.sap.getModulePath("com.sap.teched.spacetravelagency", "/model/nationalities.json"), false);
			this.getView().setModel(oModel, "nationalities");
		},
		createCustomer: function () {
			var oView = this.getView();
			var oModel = oView.getModel();
			var oCustomer = {};
			oCustomer.CustomerName = oView.byId("nameInput").getValue();
			oCustomer.EmailAddress = oView.byId("emailInput").getValue();
			oCustomer.PassportNumber = oView.byId("passportInput").getValue();
			oCustomer.Age = parseInt(oView.byId("ageInput").getValue());
			oCustomer.Gender = oView.byId("genderSelect").getSelectedItem().getText();
			oCustomer.Nationality = oView.byId("nationalityInput").getValue();
			oCustomer.Phone = oView.byId("contactInput").getValue();
			oCustomer.Address = oView.byId("addressInput").getValue();
			oModel.create('/Customers', oCustomer, null, function () {
					sap.m.MessageToast.show("Customer: " + oCustomer.CustomerName+ " Created Succesfully !");
			}, function () {
				sap.m.MessageToast.show("Customer: " + oCustomer.CustomerName+ " Creation Failed !");
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