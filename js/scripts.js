$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var personInput = $("input#person").val();
    var nounInput = $("input#noun").val();
    var adjectiveInput = $("input#adjective").val();
    var verbInput = $("input#verb").val();

    $(".person").text(personInput);
    $(".noun").text(nounInput);
    $(".adjective").text(adjectiveInput);
    $(".verb").text(verbInput);

    $("#story").show();
    console.log("submitted, " + personInput);

    event.preventDefault();
  });
});
