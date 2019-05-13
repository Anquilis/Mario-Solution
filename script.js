var counter;
counter = 0;

$("#start").click(function(){
    $("#board").show();
    $("#start").hide();
});

$("#jump").mousedown(function(){
    $("#mario").css("bottom","175px");

});

$("#jump").mouseup(function(){
    $("#mario").css("bottom","60px");
    $("#coin").hide();
    $("#count").text(counter +=(1));
});

