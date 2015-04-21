"use strict";

/* Factories */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module("hackathonApp.factories", []).
	value("version", "0.1");