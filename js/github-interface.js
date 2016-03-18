var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var user = $('#username').val();
  $('#username').val("");

  // Get Username and Repo Count
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response) {
    $('.showUsername').append('<h3>' + response.login + '</h3>');
    $('.showRepoCount').text("Public Repos: " + response.public_repos);
  });

  // Get Repos
  $.get('https://api.github.com/users/' + user + '/repos?&per_page=100&access_token=' + apiKey).then(function(response) {
    for(var i = 0; i < response.length; i++) {
      $(".showRepos").prepend('<ul><li>' + '<a href="https://github.com/' + (response[i].full_name) + '">' + (response[i].name) + '</a>' + ' ' + (response[i].description) + '</li></ul>');
    }
  }).fail(function(error) {
    $('.showRepos').text(error.responseJSON.message);
  });
};
