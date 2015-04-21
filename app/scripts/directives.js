"use strict";

/* Directives */


angular.module("hackathonApp.directives", []).
	directive("appVersion", ["version", function(version) {
		return function(scope, elm) {
			elm.text(version);
		};
	}
]);
