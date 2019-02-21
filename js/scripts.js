$(document).ready(function(){
  $("#proceed").click(function(){
    event.preventDefault();
    $("#form1").fadeOut();
    $("#form2").fadeIn();
  });
});
