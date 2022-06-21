$(".start").click(function(name1,name2) {
  var name1 = prompt("Please enter the player1 name");
  // console.log(name1);
  var name2 = prompt("Please enter the player2 name");
  // console.log(name2);
  $(".player1").text(name1);
  $(".player2").text(name2);

  var num1 = Math.floor(Math.random() * 6) + 1;
  var img1 = "dice" + num1 + ".png";
  console.log(num1);
  $(".img1").attr("src",img1);

  var num2 = Math.floor(Math.random() * 6) + 1;
  var img2 = "dice" + num2 + ".png";
  console.log(num2);
  $(".img2").attr("src",img2);

  if(num1>num2){
    $(".winnere").text(name1 + " is the winner");
  }
  else if(num2>num1){
    $(".winnere").text(name2 + " is the winner");
  }
  else{
    $(".winnere").text("It's a draw, Please start again");
  }

});
