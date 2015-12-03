angular.module('ContactsApp').controller('EditContactController', function($http, $state, $stateParams){
  var vm = this;
  if(!$stateParams.id) return $state.go('Home');
  $http.get('https://brilliant-fire-3806.firebaseio.com/' + $stateParams.id + '/.json'). success(function(res){
    vm.contact = res;
  })

vm.editContact = function(){
  $http.put('https://brilliant-fire-3806.firebaseio.com/' + $stateParams.id + '/.json', vm.contact).success(function(){
    $state.go('Home');
  });
  }
});
