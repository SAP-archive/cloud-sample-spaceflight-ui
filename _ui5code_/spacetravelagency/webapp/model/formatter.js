sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function (sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		dateFormat: function (sValue) {
			if (!sValue) {
				return "";
			}

			return sap.ui.core.format.DateFormat.getDateTimeInstance({
				pattern: "dd-MM-yyyy"
			}).format(sValue);
		},
		
		formatRoutes: function(longStart, latStart, longEnd, latEnd, ){
			return 	longStart +";"+ latStart + ";" + "0"+"; "+longEnd +";"+ latEnd + ";" + "0"; //"2.3533219;48.856614;0; -14.0034731;40.7143528;0"
		}
	};

});