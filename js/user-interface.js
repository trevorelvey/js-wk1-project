var getRepos = require('./../js/github-interface.js').getRepos;

$(document).ready(function() {
  $('#userForm').submit(function(event) {
    event.preventDefault();
    $('#showRepoCount').empty();
    $('#showRepos').empty();
    var user = $('#username').val();
    getRepos(user);
  });
});
