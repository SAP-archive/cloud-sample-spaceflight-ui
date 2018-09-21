sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function (Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("com.sap.teched.spacetravelagency.controller.Dashboard", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sap.teched.spacetravelagency.view.Dashboard
		 */
		onInit: function () {
			var oData = this.getBusyRoutesData();
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel, "busiestRoutes");
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
		},

		getBusyRoutesData: function () {
			return {
				"Routes": [{
					"position": "2.3533219;48.856614;0; -14.0034731;40.7143528;0"
				}, {
					"position": "22.3622219;48.856614;0; -64.0058731;40.7143528;0"
				}, {
					"position": "32.3522219;48.856614;0; -14.0059731;40.7143528;0"
				}, {
					"position": "42.3922219;48.856614;0; -74.0159731;40.7143528;0"
				}, {
					"position": "1.3522211;48.856614;0; -74.0159731;40.7143528;0"
				}, {
					"position": "92.3522219;48.856614;0; -118.2436849;34.0522342;0"
				}, {
					"position": "2.3533219;48.856614;0; -24.0034731;40.7143528;0"
				}, {
					"position": "22.3622219;48.856614;0; -14.0058731;40.7143528;0"
				}, {
					"position": "32.3522219;48.856614;0; -84.0059731;40.7143528;0"
				}, {
					"position": "42.3922219;48.856614;0; -24.0159731;40.7143528;0"
				}, {
					"position": "1.3522211;48.856614;0; -14.0159731;40.7143528;0"
				}, {
					"position": "32.3522219;48.856614;0; -118.2436849;34.0522342;0"
				}, {
					"position": "92.3533219;48.856614;0; -14.0034731;40.7143528;0"
				}, {
					"position": "42.3622219;48.856614;0; -64.0058731;40.7143528;0"
				}, {
					"position": "12.3522219;48.856614;0; -14.0059731;40.7143528;0"
				}, {
					"position": "62.3922219;48.856614;0; -74.0159731;40.7143528;0"
				}, {
					"position": "19.3522211;48.856614;0; -94.0159731;40.7143528;0"
				}, {
					"position": "2.3522219;48.856614;0; -118.2436849;34.0522342;0"
				}, {
					"position": "11.3533219;48.856614;0; -14.0034731;40.7143528;0"
				}, {
					"position": "93.3622219;48.856614;0; -64.0058731;40.7143528;0"
				}, {
					"position": "89.3522219;48.856614;0; -14.0059731;40.7143528;0"
				}, {
					"position": "62.3922219;48.856614;0; -74.0159731;40.7143528;0"
				}, {
					"position": "9.3522211;48.856614;0; -74.0159731;40.7143528;0"
				}, {
					"position": "2.3522219;48.856614;0; -8.2436849;34.0522342;0"
				}]
			};
		}
	});

});