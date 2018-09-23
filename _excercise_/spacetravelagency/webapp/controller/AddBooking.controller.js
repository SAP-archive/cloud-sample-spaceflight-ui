sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, History, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.sap.teched.spacetravelagency.controller.AddBooking", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sap.teched.spacetravelagency.view.AddBooking
		 */
		//	onInit: function() {
		//
		//	},
		onItinerarySearch: function (event) {
			var item = event.getParameter("suggestionItem");
			if (item) {
				sap.m.MessageToast.show("search for: " + item.getText());
			}
		},

		onItinerarySuggest: function (event) {
			var sQuery = event.getParameter("suggestValue");
			var filters = [];
			if (sQuery) {
				filters = [new Filter("Name", FilterOperator.Contains, sQuery)];
			}

			var oSearchItineraryField = this.getView().byId("searchItineraryField");
			var oBinding = oSearchItineraryField.getBinding("suggestionItems");
			oBinding.filter(filters);
			oBinding.attachEventOnce('dataReceived', function () {
				// now activate suggestion popup
				oSearchItineraryField.suggest();
			});
		},

		onCustomersSearch: function (event) {
			var item = event.getParameter("suggestionItem");
			if (item) {
				sap.m.MessageToast.show("search for: " + item.getText());
			}
		},

		onCutomersSuggest: function (event) {
			var sQuery = event.getParameter("suggestValue");
			var filters = [];
			if (sQuery) {
				filters = [new Filter("CustomerName", FilterOperator.Contains, sQuery)];
			}

			var oSearchCustomerField = this.getView().byId("searchCustomersField");
			var oBinding = oSearchCustomerField.getBinding("suggestionItems");
			oBinding.filter(filters);
			oBinding.attachEventOnce('dataReceived', function () {
				oSearchCustomerField.suggest();
			});
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