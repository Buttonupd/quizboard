var total = 0;
function myFunc(userValue) {
  var names = ["year", "htmlType", "htmlMeaning", "creator", "htmlSec", "stdx", "ecma", "dataType"]
  // var q1 = document.getElementsByName('year');
  //   if(q1[0].checked){
  //     total===12.5;
  //   }else{
  //     total===0;
  //   };
  // var q2 = document.getElementsByName('htmlType');
  //   if(q2[0].checked){
  //     total===12.5;
  //   }else{
  //     total===0;
  //   };
  //   var q3 = document.getElementsByName('htmlMeaning');
  //     if(q3[1].checked){
  //       total===12.5;
  //     }else{
  //       total===0;
  //     };
  //     total = q1+q2+q3;

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

  alert(total.length);

  // $("#message").text(total);

});
});
