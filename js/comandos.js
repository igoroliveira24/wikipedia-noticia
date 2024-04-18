$(function() {
    console.log("funcionando..");
});

$ ("#li").click(function(){
    var cor = $(this).val();
    console.log (cor);

    $("#li").css("color", "rgb(0,0,0)") 
});