(function() {
    'use strict';

    angular
        .module("app")
        .controller("weather", weather);
    //3abf86fb898c19cce1d81d99df66e4d3
    function weather($http, toastr) {
        var vm = this;
        vm.cityInput = '';
        vm.history = [];
        vm.city = [];

        /*Serch query*/
        vm.callApi = function callApi() {
            $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + vm.cityInput + '&appid=3abf86fb898c19cce1d81d99df66e4d3').then(function(response) {
                    vm.cityData = response.data;
                    vm.d = new Date();
                    vm.history.unshift({
                        city: vm.cityInput,
                        dateTime: vm.d.toUTCString()
                    })
                    vm.cityInput = '';
                })
                .catch(function(error) {
                    toastr.error('error', "FAIL: Try Entering Something Valid");
                });
        }
        /*buttons*/
        vm.callSanDiego = function callSanDiego() {
            $http.get('http://api.openweathermap.org/data/2.5/weather?q=sandiego&appid=3abf86fb898c19cce1d81d99df66e4d3').then(function(response) {
                    vm.cityData = response.data;
                    vm.d = new Date();
                    vm.history.unshift({
                        city: 'San Diego',
                        dateTime: vm.d.toUTCString()
                    })
                    vm.cityInput = '';
                })
                .catch(function(error) {
                    toaster.pop('error', "FAIL", "my bad ya'll");
                });
        }
        vm.callBerlin = function callBerlin() {
            $http.get('http://api.openweathermap.org/data/2.5/weather?q=berlin&appid=3abf86fb898c19cce1d81d99df66e4d3').then(function(response) {
                    vm.cityData = response.data;
                    vm.d = new Date();
                    vm.history.unshift({
                        city: 'Berlin',
                        dateTime: vm.d.toUTCString()
                    })
                    vm.cityInput = '';
                })
                .catch(function(error) {
                    toaster.pop('error', "FAIL", "my bad ya'll");
                });
        }
        vm.callSeattle = function callSeattle() {
            $http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&appid=3abf86fb898c19cce1d81d99df66e4d3').then(function(response) {
                    vm.cityData = response.data;
                    vm.d = new Date();
                    vm.history.unshift({
                        city: 'Seattle',
                        dateTime: vm.d.toUTCString()
                    })
                    vm.cityInput = '';
                })
                .catch(function(error) {
                    toaster.pop('error', "FAIL", "my bad ya'll");
                });
        }
        vm.callTehran = function callTehran() {
            $http.get('http://api.openweathermap.org/data/2.5/weather?q=tehran&appid=3abf86fb898c19cce1d81d99df66e4d3').then(function(response) {
                    vm.cityData = response.data;
                    vm.d = new Date();
                    vm.history.unshift({
                        city: 'Tehran',
                        dateTime: vm.d.toUTCString()
                    })
                    vm.cityInput = '';
                })
                .catch(function(error) {
                    toaster.pop('error', "FAIL", "my bad ya'll");
                });
        }
        vm.callBeijing = function callBeijing() {
            $http
                .get('http://api.openweathermap.org/data/2.5/weather?q=beijing&appid=3abf86fb898c19cce1d81d99df66e4d3')
                .then(function(response) {
                    vm.cityData = response.data;
                    vm.d = new Date();
                    vm.history.unshift({
                        city: 'Beijing',
                        dateTime: vm.d.toUTCString()
                    })
                    vm.cityInput = '';
                })
                .catch(function(error) {
                    toaster.pop('error', "FAIL", "my bad ya'll");
                });
        }
    }
})();
