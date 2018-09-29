sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel",
	"com/sap/teched/spacetravelagency/model/formatter"
], function (Controller, History, JSONModel, formatter) {
	"use strict";
	return Controller.extend("com.sap.teched.spacetravelagency.controller.Dashboard", {

	formatter: formatter,

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