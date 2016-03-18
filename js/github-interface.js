var apiKey = require('./../.env').apiKey;

// exports.getRepos = function(){
//
//   $.get('https://api.github.com/users/' + $username + '?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

$(document).ready(function() {
  $('#getRepos').click(function() {
    var user = $('#username').val();
    $('#username').val("");
    $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response) {
      $('.showUsername').text(response.login);
      $('.showRepoCount').text("Public Repos: " + response.public_repos);
    });
    $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response) {
      // $('.showRepos').text(response.all.name);
      for(var i = 0; i < response.length; i++) {
        $(".showRepos").prepend('<ul><li>' + '<a href="https://github.com/' + (response[i].full_name) + '">' + (response[i].name) + '</a>' + ' ' + (response[i].description) + '</li></ul>');

      }

    }).fail(function(error) {
      $('.showRepos').text(error.responseJSON.message);
    });
  });
});
