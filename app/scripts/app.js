'use strict';

/**
 * @ngdoc overview
 * @name 1yeomanApp
 * @description
 * # 1yeomanApp
 *
 * Main module of the application.
 */
angular.module('1yeoman', ["ui.router"]).config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when("","/information")
	$stateProvider.state("home", {
		templateUrl: "../views/home.html",
		url: "/home",
		controller: "home"
	}).state("flowershop", {
		templateUrl: "../views/flowershop.html",
		url: "/flowershop",
		controller: "flowershop"
	}).state("wedding", {
		templateUrl: "../views/wedding.html",
		url: "/wedding",
		controller: "wedding"
	}).state("service", {
		templateUrl: "../views/service.html",
		url: "/service",
		controller: "service"
	}).state("about", {
		templateUrl: "../views/about.html",
		url: "/about",
		controller: "about"
	}).state("relation", {
		templateUrl: "../views/relation.html",
		url: "/relation",
		controller: "relation"
	})
})
