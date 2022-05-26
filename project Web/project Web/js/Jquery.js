$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown(500);
    });
    $("#stop").click(function(){
        $("#panel").slideUp(500);
    });
});
