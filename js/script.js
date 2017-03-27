  var drawColor = "black";

$(document).ready(function(){
  var gridSize = 16;

  DrawGrid(gridSize);

  $("li:first-child").click(function(){
    $('.item').css("background-color", "lightgray");
    $("#sketchWrapper").effect("shake", "left", "10", "3");
  });

  $("li:nth-child(2)").click(function(){
    drawColor = "black";
    $("#colorBar").css("background-color", drawColor);
  });

  $("li:nth-child(3)").click(function(){
    drawColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    $("#colorBar").css("background-color", drawColor);
  });

  $("li:nth-child(4)").click(function(){
    gridSize = prompt("Enter a grid size less than 100.");
    if (gridSize > 0 && gridSize <= 100){
      DrawGrid(gridSize);
    }
  });
});

function InitPen(){
  $(".item").mouseenter(function(){
    $(this).css("background-color", drawColor)
  });
}

function DrawGrid(size){
  RemoveItems();
  for (var x = 0; x < size; x++){
    for (var y = 0; y < size; y++){
      $('#sketch').append("<div class='item'></div>");
    }
  }
  var $i = $(".item");
  $i.css("width", 500/size);
  $i.css("height", 500/size);

  InitPen();
}

function RemoveItems(){
  if ($('.item').length){
    $('.item').remove();
  }
  $("#sketchWrapper").effect("shake", "left", "10", "3");
}
