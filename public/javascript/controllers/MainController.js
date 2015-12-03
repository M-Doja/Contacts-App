angular.module('ContactsApp').controller('MainController', function($http, ContactFactory){
  var vm = this;
    // shows on homepage

  vm.getContacts = function(){
    ContactFactory.getContacts().then(function(contacts){
      vm.contacts = contacts;
    })
  }
  vm.getContacts();
  vm.deleteUser = function(contact){
    ContactFactory.deleteUser(contact._id);
  }

});
  // vm.startCreate = function(){
  //   vm.creatingUser = true;
  // }
  // vm.saveUser = function(){
  //   vm.creatingUser = false;
  //   vm.contacts.push(vm.newUser);
  //   $http.post('https://brilliant-fire-3806.firebaseio.com/.json', vm.newUser).success(function(){
  //     vm.getContacts();
  //   });
  //   vm.newUser = {};
  // }


  // vm.editUser = function(index){
  //   vm.creatingUser = true;
  //   var idx = vm.contacts.indexOf(index)
  //   vm.newUser.name = vm.newUser.name[idx];
  //   vm.newUser.phone = vm.newUser.phone[idx];
  //   vm.newUser.email = vm.newUser.email[idx];
  //   console.log(vm.newUser);
  //
  //    vm.creatingUser = false;
  // }
  // vm.show = false;
  // vm.showedit = function(index){
  //   vm.show = true;
  //   console.log(vm.contacts)
  //   vm.currentContact = vm.contacts[index]
  //   console.log(vm.currentContact)
  // }
