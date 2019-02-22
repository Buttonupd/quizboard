var total = 0;
var names= function(){
  var name = parseInt(["year", "htmlType", "htmlMeaning", "creator", "htmlSec", "stdx", "ecma", "dataType"].value());
  return(+=name);
}
//

$(document).ready(function(){
  $("#proceed").click(function(){
    event.preventDefault();
    $("#form1").fadeOut();
    $("#form2").fadeIn();
  });

$("#submit").click(function(check){
  event.preventDefault();
  $("#form2").fadeOut();
  $("#form3").show();

  var name = result

  $("#message").text(result);
});

});
