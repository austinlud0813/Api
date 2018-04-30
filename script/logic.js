$(document).ready(function() {

  $('#buttons').hide();

  $('#searchButton').click(function() {

    var movie = $('#movieSearch').val();
    console.log(movie);

    var movie = $('#movieSearch').val();

    var apiKey = "c7a0da2b";

    var URL = "http://www.omdbapi.com/?t=" + movie + "&r=json&apikey=" + apiKey;



    $.get(URL, function(data) {

      console.log(data);

      $('#title').html('')
      $('#title').append(data.Title);

      $('#poster').html('')
      $("#poster").attr("src", data.Poster);

      $('#actors').html('')
      $('#actors').append("Actors: " + data.Actors);

      $('#prod').html('')
      $('#prod').append(data.Production);

      $('#plot').html('')
      $('#plot').append(data.Plot);

      $('#release').html('')
      $('#release').append("Released: " + data.Released);

      $('#director').html('')
      $('#director').append("Director: " + data.Director);

      $('#rating').html('')
      $('#rating').append("Rating: " + data.imdbRating + "/10");

      $('#rated').html('')
      $('#rated').append("Rated: " + data.Rated);

      $('#runtime').html('')
      $('#runtime').append("Runtime: " + data.Runtime);

      $('#genre').html('')
      $('#genre').append("Genre: " + data.Genre);

      $('#totalSeasons').html('')
      $('#totalSeasons').append("Total Seasons: " + data.totalSeasons);

      $('#boxoffice').html('')
      $('#boxoffice').append("Money made in Box office: " + data.BoxOffice);

      $('#writer').html('')
      $('#writer').append("Writer(s): " + data.Writer);

      $('#awards').html('')
      $('#awards').append("Awards: " + data.Awards);

      $('#websiteBtn').attr("href", data.Website);

    });

$('#buttons').show();


  });




  // Get the Information modal
  var modal = document.getElementById('infoModal');

  // Get the button that opens the modal
  var btn = document.getElementById('aboutBtn');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];


 // Target the btn ID for the onClick and then use $('#MODALID').modal();
 // I removed all code about closing the modal. Not needed.

 // onClick for Info
 $('#aboutBtn').click(function() {
   $('#infoModal').modal();
 });
 // onClick for Studio
 $('#studioBtn').click(function() {
  $('#studioModal').modal();
 })
 // onClick for review
 $('#ratingsBtn').click(function() {
   $('#ratingsModal').modal();
 });
  // Get the Studio modal
  var modal = document.getElementById('studioModal');

  // Get the button that opens the modal
  var btn = document.getElementById('studioBtn');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];



  // Get the Ratings modal
  var modal = document.getElementById('ratingsModal');

  // Get the button that opens the modal
  var btn = document.getElementById('ratingsBtn');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];



});
