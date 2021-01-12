angular.module('primeiraApp').constant('consts',{
    appName: 'MEAN - Primeira App',
    version: '1.0',
    owner: 'Felipe Natale',
    year: '2020',
    site: 'https://www.linkedin.com/in/felipenatale/',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_primeira_app_user',
}).run(['$rootScope','consts', function($rootScope, consts){
    $rootScope.consts = consts
}])