var gameSettings = {
  compSequence: [],
  playerSequence: [],
  round: 1,
}

var cowAudio = document.createElement('audio');
  cowAudio.setAttribute('src', 'sounds/cowCut.mp3');
  cowAudio.setAttribute('autoplay:false', 'autoplay');

var chickenAudio = document.createElement('audio');
  chickenAudio.setAttribute('src', 'sounds/chickenCut.mp3');
  chickenAudio.setAttribute('autoplay:false', 'autoplay');

var pigAudio = document.createElement('audio');
  pigAudio.setAttribute('src', 'sounds/pigCut.mp3');
  pigAudio.setAttribute('autoplay:false', 'autoplay');

var goatAudio = document.createElement('audio');
  goatAudio.setAttribute('src', 'sounds/goatCut.mp3');
  goatAudio.setAttribute('autoplay:false', 'autoplay');

var clearBtn = function () {
  $(".gamePiece").css("border", "none");
  $(".gamePiece").css("background-color", "white");
  };

/* Dr. Mike helped with creating a switch statement rather than using a for loop
and setting the delay function with setTimeout based on the switch statement */

function showAnimal(animalNumber) {
  switch(animalNumber) {
    case 1:
      cowAudio.play();
      $("#cowBtn").css("border", "5px solid green");
      $("#cowBtn").css("background-color", "green");
      setTimeout(clearBtn, 750);
      break;
    case 2:
      chickenAudio.play();
      $("#chickenBtn").css("border", "5px solid red");
      $("#chickenBtn").css("background-color", "red");
      setTimeout(clearBtn, 750);
      break;
    case 3:
      pigAudio.play();
      $("#pigBtn").css("border", "5px solid blue");
      $("#pigBtn").css("background", "blue");
      setTimeout(clearBtn, 750);
      break;
    case 4:
      goatAudio.play();
      $("#goatBtn").css("border", "5px solid yellow");
      $("#goatBtn").css("background-color", "yellow");
      setTimeout(clearBtn, 750);
      break;
    }
}

//Dr. Mike assisted in creating a setTimeout function and showing me its functionality

function delayedPlay(animalNumber, delay) {
  setTimeout(function() {
    showAnimal(animalNumber);
  }, delay);
}

$("#reset").on( "click", function() {
  gameSettings.compSequence = [];
  gameSettings.playerSequence = [];
  gameSettings.round = 1;
  $("#counter").html(gameSettings.round - 1);
});

function computerTurn () {
  createSequence();
  gameLoop ();
  $("#counter").html(gameSettings.round - 1);
}

function createSequence() {
    gameSettings.compSequence.push(Math.floor(Math.random() * 4) + 1);
};

function gameLoop() {
  for(var i = 0; i <= gameSettings.compSequence.length; i++) {
    delayedPlay(gameSettings.compSequence[i], i * 1000);
  }
}

function newRound () {
  ++gameSettings.round;
  gameSettings.playerSequence = [];
}

function endGame () {
  gameSettings.compSequence = [];
  gameSettings.playerSequence = [];
  gameSettings.round = 1;
  window.alert("Not quite right. Click PLAY to try a new sequence.");
  $("#counter").html(gameSettings.round - 1);
}

//function gamePlay() {


//}

$(document).ready(function() {

  $("#play").on( "click", function() {
    computerTurn();
//    gamePlay();
  });

  $("#cowBtn").on( "click", function() {
      cowAudio.play();
      $("#cowBtn").css("border", "5px solid green");
      $("#cowBtn").css("background-color", "green");
      gameSettings.playerSequence.push(1);
      console.log("the player sequence is " + gameSettings.playerSequence);
      if ((gameSettings.playerSequence.length === gameSettings.compSequence.length)
          && _.isEqual(gameSettings.compSequence, gameSettings.playerSequence)) {
            setTimeout(function() {
              newRound();
            }, 1000);
            setTimeout(function() {
              computerTurn();
              }, 1000);
            }
      else if (gameSettings.playerSequence.length === gameSettings.compSequence.length) {
            setTimeout(function() {
              endGame();
            }, 300);
            }
      setTimeout(clearBtn, 500);
      });

  $("#chickenBtn").on( "click", function() {
      chickenAudio.play();
      $("#chickenBtn").css("border", "5px solid red");
      $("#chickenBtn").css("background-color", "red");
      gameSettings.playerSequence.push(2);
      console.log("the player sequence is " + gameSettings.playerSequence);
      if ((gameSettings.playerSequence.length === gameSettings.compSequence.length)
          && _.isEqual(gameSettings.compSequence, gameSettings.playerSequence)) {
            setTimeout(function() {
              newRound();
            }, 1000);
            setTimeout(function() {
              computerTurn();
            }, 1000);
            }
      else if (gameSettings.playerSequence.length === gameSettings.compSequence.length) {
            setTimeout(function() {
              endGame();
            }, 300);
            }
      setTimeout(clearBtn, 500);
      });

  $("#pigBtn").on( "click", function() {
      pigAudio.play();
      $("#pigBtn").css("border", "5px solid blue");
      $("#pigBtn").css("background", "blue");
      gameSettings.playerSequence.push(3);
      console.log("the player sequence is " + gameSettings.playerSequence);
      if ((gameSettings.playerSequence.length === gameSettings.compSequence.length)
          && _.isEqual(gameSettings.compSequence, gameSettings.playerSequence)) {
            setTimeout(function() {
              newRound();
            }, 1000);
            setTimeout(function() {
              computerTurn();
            }, 1000);
            }
      else if (gameSettings.playerSequence.length === gameSettings.compSequence.length) {
            setTimeout(function() {
              endGame();
            }, 300);
            }
      setTimeout(clearBtn, 500);
      });

  $("#goatBtn").on( "click", function() {
      goatAudio.play();
      $("#goatBtn").css("border", "#5px solid yellow");
      $("#goatBtn").css("background-color", "yellow");
      setTimeout(clearBtn, 500);
      gameSettings.playerSequence.push(4);
      console.log("the player sequence is " + gameSettings.playerSequence);
      if ((gameSettings.playerSequence.length === gameSettings.compSequence.length)
          && _.isEqual(gameSettings.compSequence, gameSettings.playerSequence)) {
            setTimeout(function() {
              newRound();
            }, 1000);
            setTimeout(function() {
              computerTurn();
            }, 1000);
            }
      else if (gameSettings.playerSequence.length === gameSettings.compSequence.length) {
            setTimeout(function() {
              endGame();
            }, 300);
            }
      setTimeout(clearBtn, 500);
      });


});

//allows for button click while not in gameplay mode

  $("#cowBtn").click( function () {
      cowAudio.play();
      $("#cowBtn").css("border", "5px solid green");
      $("#cowBtn").css("background-color", "green");
      setTimeout(clearBtn, 500);
  })

  $("#chickenBtn").click( function() {
      chickenAudio.play();
      $("#chickenBtn").css("border", "5px solid red");
      $("#chickenBtn").css("background-color", "red");
      setTimeout(clearBtn, 500);
  })

  $("#pigBtn").click( function() {
      pigAudio.play();
      $("#pigBtn").css("border", "5px solid blue");
      $("#pigBtn").css("background", "blue");
      setTimeout(clearBtn, 500);
  })

$("#goatBtn").click( function() {
      goatAudio.play();
      $("#goatBtn").css("border", "#5px solid yellow");
      $("#goatBtn").css("background-color", "yellow");
      setTimeout(clearBtn, 500);
  })



