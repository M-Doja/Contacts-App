angular.module('ContactsApp').controller('AddContactController', function($http, $state, ContactFactory){
  var vm = this;
  var addContact = {};

  vm.saveUser = function(){
    ContactFactory.saveUser(vm.addContact).then(function(){
      $state.go('Home');
    });
  }
});
