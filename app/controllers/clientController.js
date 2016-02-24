'use strict';

(function () {
	angular
		.module('turnerApp', [])

		.controller('homeController', ['$scope', '$http', function ($scope, $http) {
			$scope.formData = {};
			$scope.searchResults = [];
			$scope.titleDetails = [];

			$scope.searchTitles = function() {
				$http.get('/api/searchTitles?title=' + $scope.formData.text)
					.success(function(data) {
						$scope.formData = {};
						$scope.titleDetails = [];
						$scope.searchResults = data;
					})
					.error(function(err) {
						console.log('Error:', err);
					});
			};

			$scope.getTitleDetails = function(id) {
				$http.get('/api/getDetails?id=' + id)
					.success(function(data) {
						$scope.searchResults = [];
						$scope.titleDetails = data;
					})
					.error(function(err) {
						console.log('Error:', err);
					});
			};

		}])

		.controller('contactController',
			['$scope',
			 function ($scope) {

				 $scope.submitForm = function(isValid) {
					 if (isValid) {
						 alert('Form meets all validation requirements');
					 }
				 };
		 }]);

})();
