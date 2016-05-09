/**
 * Created by robins on 9/5/16.
 */
"use strict";
angular.module("snaphy-cloud")
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url:"/home",
                templateUrl:"/static/html/partials/home.html"
            })
            .state('login',{
                url:"/login",
                templateUrl:"/static/html/partials/login.html",
                controller:"loginCtrl"
            })
    });