angular.module('ContactsApp').factory('ContactFactory', function($http, $q){
  var o = {};

  o.getContacts = function(){
      var q = $q.defer();
    $http.get("https://brilliant-fire-3806.firebaseio.com/.json").success(function(res){
        var contacts = [];
        for(var prop in res){
          res[prop]._id = prop;
          contacts.push(res[prop]);
        }
        q.resolve(contacts);
    });
        return q.promise;
  }

  o.saveUser = function(i){
    var q = $q.defer();
    $http.post('https://brilliant-fire-3806.firebaseio.com/.json', i).success(function(){
      q.resolve();
    });
    return q.promise;
  }

  o.deleteUser = function(id){
    var q = $q.defer();
    $http.delete("https://brilliant-fire-3806.firebaseio.com/" + id + "/.json").success(function(){
      q.resolve()
      // o.getContacts();
    });
    return q.promise;
  }
return o;

});
