(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('PortApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) { //add $urlRouterProvider as dependency
    $stateProvider.state({
        name: 'about',
        url: '/about',
        component: 'aboutPage',
    });
    $stateProvider.state({
        name: 'portfolio',
        url: '/portfolio',
        component: 'portInfo',
    });
    $stateProvider.state({
        name: 'home',
        url: '/contact',
        component: 'contact',
    });

    $urlRouterProvider.when('', '/home');
});

app.controller('PortController', function ($scope, $location/**,PortService**/) {
    $scope.current = function (viewLocation) {
        return viewLocation === $location.path();
    }
});

//app.factory('PortService',)

window.addEventListener('load', function () {
    console.log('ready to rock');
});
},{}]},{},[1]);
