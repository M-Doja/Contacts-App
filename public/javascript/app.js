angular.module('ContactsApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('Home', {
    url: '/',
    templateUrl: '/templates/home.html'
  }).state('EditContact', {
    url: '/contact/edit/:id',
    templateUrl: '/templates/EditContact.html',
    controller: "EditContactController as vm"
  }).state('AddContact',{
    url: '/contact/add',
    templateUrl: '/templates/AddContact.html',
    controller: 'AddContactController as vm'
  })
  $urlRouterProvider.otherwise('/')
});
