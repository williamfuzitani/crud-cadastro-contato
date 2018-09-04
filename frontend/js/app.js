var app = angular.module('app', []);

app.controller('TabelaCtrl', function($scope, $http) {

    $scope.contatos = [];

    $scope.updateList = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/pessoa'
        }).then(function success(response) {
            console.log(response);
            $scope.contatos = response.data;
        }, function error(response) {
            console.log(response);
        });
    }

    $scope.saveUser = function() {
        $http({
            method: 'POST',
            url: 'http://localhost:8080/pessoa',
            data: this.pessoa
        }).then(function() {
            $scope.updateList();
        }, function error(response) {
            console.log(response);
        });
        $scope.pessoa = null;
    }

    $scope.deleteUser = function(id) {
        $http({
            method: 'DELETE',
            url: 'http://localhost:8080/pessoa/' + id
        }).then(function() {
            $scope.updateList();
        });
    }

    $scope.applyChange = function(id) {
        $http({
            method: 'PUT',
            url: 'http:localhost:8080/pessoa/' + id,
            data: this.pessoa
        }).then(function() {
            $scope.updateList();
        });
        $scope.edit = false;
        $scope.pessoa = null;
    }

    $scope.editUser = function(id) {
        $scope.edit = true;
    }

    $http({
        method: 'GET',
        url: 'http://localhost:8080/pessoa'
    }).then(function success(response) {
        console.log(response);
        $scope.contatos = response.data;
    }, function error(response) {
        console.log(response);
    });
    
});