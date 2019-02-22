var total = 0;
function(){
    var q1 = getElementsByName('year').value();
    var q2 = getElementsByName('htmlType').value();
    var q3 = getElementsByName('htmlMeaning').value();
    var q4 = getElementsByName('creator').value();
    var q5 = getElementsByName('htmlSec').value();
    var q6 = getElementsByName('stdx').value();
    var q7 = getElementsByName('ecma').value();
    var q8 = getElementsByName('dataType').value();

    total = parseInt((q1+q2+q3+q4+q5+q6+q7+q8));

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
