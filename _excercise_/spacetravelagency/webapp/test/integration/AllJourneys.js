// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Bookings in the list
// * All 3 Bookings have at least one Customer

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/sap/teched/spacetravelagency/test/integration/arrangements/Arrangement","com/sap/teched/spacetravelagency/test/integration/MasterJourney",
	"com/sap/teched/spacetravelagency/test/integration/NavigationJourney",
	"com/sap/teched/spacetravelagency/test/integration/NotFoundJourney",
	"com/sap/teched/spacetravelagency/test/integration/BusyJourney"
], function (Opa5, Arrangement) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "com.sap.teched.spacetravelagency.view.",
		autoWait: true
	});
});
