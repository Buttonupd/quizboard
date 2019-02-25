//Business Logic
var total = 0;
function myFunc(userValue) {
    var names = ["year", "htmlType", "htmlMeaning", "creator", "htmlSec", "stdx", "ecma", "dataType"];
    names.forEach(function(name) {
    var userValue = $("input:radio[name=" + name + "]:checked").val();
    if(userValue === "12.5") {
      total+=12.5;
    }
  });
}

//User Interface
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
  $("#retry").show();
  myFunc();

  if(total >= 80) {
     $("#comments").text("EXCELLENT PERFOMANCE!!!");
     $("#comments").addClass('animated heartBeat');
     $("#form3").fireworks();
   } else if(total >= 50) {
     $("#comments").text("Good work!");
     $("#comments").addClass('animated bounce');
   }else{
     $("#comments").text("Poor trial, try again");
   }

  $("#message").text(parseInt(total) + "%");



});
});
