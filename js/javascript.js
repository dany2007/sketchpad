$(document).ready(function() {
  for (var i = 1; i < 17; i++) {
    for (var j = 1; j < 17; j++) {
      $("#container").append($("<div/>")
        .addClass("r" + j)
        .addClass("c" + i)
        .addClass("cell")
        //.text(j)
      );
    }
  }

  $("div").hover(function() {
    k = Math.floor(Math.random() * 3);
    if (k < 1) {
      $(this).css('background-color', 'red');
    } else {
      if (k < 2) {
        $(this).css('background-color', 'purple');
      } else $(this).css('background-color', 'yellow');
    }
  });

});


// $("div").hover(function(){
// $(this).css('background-color','blue');
// });
//});
