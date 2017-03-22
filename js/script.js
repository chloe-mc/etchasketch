$(document).ready(function(){
  var gridSize = $("input").val();
  var count = 0;
  for (var x = 0; x < gridSize; x++){
    for (var y = 0; y < gridSize; y++){
      $('#sketch').append("<div class='item'></div>");
      count++;
    }
  }
  $(".item").css("width", 500/gridSize);
  $(".item").css("height", 500/gridSize);
  console.log(count);
});
