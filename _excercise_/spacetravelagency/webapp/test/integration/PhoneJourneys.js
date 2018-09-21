sap.ui.define([
	"sap/ui/test/Opa5",
	"com/sap/teched/spacetravelagency/test/integration/arrangements/Arrangement",
	"com/sap/teched/spacetravelagency/test/integration/NavigationJourneyPhone",
	"com/sap/teched/spacetravelagency/test/integration/NotFoundJourneyPhone",
	"com/sap/teched/spacetravelagency/test/integration/BusyJourneyPhone"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "com.sap.teched.spacetravelagency.view.",
		autoWait: true
	});
});
