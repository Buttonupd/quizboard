var total = 0;
var result = function(){
  total +=parseInt(["year", "htmlType", "htmlMeaning", "creator", "htmlSec", "stdx", "ecma", "dataType"].value());
};

$(document).ready(function(){
  $("#proceed").click(function(){
    event.preventDefault();
    $("#form1").fadeOut();
    $("#form2").fadeIn();
  });

$("#submit").click(function(){
  event.preventDefault();
  $("#form2").fadeOut();
  $("#form3").show();

  $("#message").text(total);

});
});
