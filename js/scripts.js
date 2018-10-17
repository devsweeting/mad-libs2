$(document).ready(function() {
  $("#formOne").submit(function(event) {
    console.log("submitted");

    event.preventDefault();
  })
});
