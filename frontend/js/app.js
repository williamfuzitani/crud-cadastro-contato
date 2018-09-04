angular.module('app', [])
.controller('TabelaCtrl', function($scope, $http) {

    $scope.contatos = [];

    $http({
        method: 'GET',
        url: 'http://localhost:8080/pessoa'
    }).then(function success(response) {
        console.log(response);
        $scope.contatos = response.data;
    }, function error(response) {
        console.log(response);
    });

    function ListContatos($scope) {
        $scope.buscarListaContatos = function() {
            $http.get('http://localhost:8080/pessoa').then(function(response) {
                $scope.contatos = response.data;
            })
        }
    }

    $scope.saveUser = function() {
        $http({
            method: 'POST',
            url: 'http://localhost:8080/pessoa',
            data: this.pessoa
        }).then(function(response) {
            console.log(response);
        }, function error(response) {
            console.log(response);
        });
        $scope.pessoa = null;
    }

    $scope.deleteUser = function() {
        $http({
            method: 'DELETE',
            url: 'http://localhost:8080/pessoa/' + this.pessoa.id
        });
    }

    $scope.editUser = function() {
        $http.put('http://localhost:8080/' + this.pessoa.id, this.pessoa)
        .then(function(response) {
            console.log(response);
        }, function(response) {
            console.log(response);
        });
    }

    $scope.clearTable = function() {
        $scope.contatos = null;
    }
    
});