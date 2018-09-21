sap.ui.define([
	"com/sap/teched/spacetravelagency/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.sap.teched.spacetravelagency.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
