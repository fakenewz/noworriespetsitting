$(document).ready(function() {

  console.log("by")

  var testHere = $("#testHere");
  var userList = $("tbody");

  getUsers();

  function getUsers() {
    $.get("/dashboard", function(data) {
      var objectToAdd = [];
      for (var i = 0; i < data.length; i++) {
        objectToAdd.push(createUserobject(data[i]));
      }
      renderUserProfiles(objectToAdd);
      testHere.val("");
    });
  }

  function renderUserProfiles(object) {
    if (object.length) {
      console.log(object);
      userList.prepend(object);
    }
  }
});