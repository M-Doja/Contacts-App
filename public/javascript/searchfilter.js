angular.module('ContactsApp').filter('search', function(){
  return function(contacts, b){
    if(!search) return contacts;
    var filtered = [];
    for(var i =0; i < contacts.length; i++){
      if(contacts[i].name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || contacts[i].phone.indexOf(search) !== -1 ||
    contacts[i].email.toLowerCase().indexOf(search.toLowerCase()) !== -1)
      {
        filtered.push(contacts);
      }
    }
  }
  return filtered
})
