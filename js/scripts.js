$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var inputs = ["person", "noun", "adjective", "verb"]

    inputs.forEach(function(input){
      var userInput = $("input#" + input).val();
      $("." + input).text(userInput);
      console.log("input=" + input + "  userInput=" + userInput);
      debugger;
    })

    // var personInput = $("input#person").val();
    // var nounInput = $("input#noun").val();
    // var adjectiveInput = $("input#adjective").val();
    // var verbInput = $("input#verb").val();
    //
    // $(".person").text(personInput);
    // $(".noun").text(nounInput);
    // $(".adjective").text(adjectiveInput);
    // $(".verb").text(verbInput);

    $("#story").show();

    event.preventDefault();
  });
});
