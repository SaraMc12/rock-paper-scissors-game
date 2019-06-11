var config = {
    apiKey: "AIzaSyCzLRBOZ8DUW_j1ehGneFjlWuXBk1YKxqI",
    authDomain: "rock-paper-scissors-daefe.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-daefe.firebaseio.com",
    storageBucket: "rock-paper-scissors-daefe.appspot.com"
  };
  
  firebase.initializeApp(config);
  var db = firebase.database()

  var PlayerOne=0
  var PlayerTwo=0
  var Score=0
  var Winner=0
  var Loser=0
  var GameChoice= ["rock", "scissors", "paper"];
  var Play1=""
  var Play2=""


  $("#start").on("click", function(){

    if(
        player1===(empty).assign(name)
    )
    if(
        player2===(empty).assign(name)
    )
    }else{
        
    alert()
        //can onl 2 people at a time play this game? waiting for a turn seems stupid. Need to figure out later.
    

    // if play1 is empty then assign name to play1 if not empty .... if play2 is emplty assit to play2 .... if both not empty you cant play 
    // updating firebae create the play with name a object (wins loss etc)  /  play2  // game for both 

    // push on firebase   db.push(object)    ///  db.on("value", function (snapshot)){]}
  });

  //create dynamic images and buttons
  
  
  // on click for the play button and if the 2 players are not empty then create the on click for the s/r/p than regular game and evry time win or loss update firebase

  
//Create timer of 3 seconds for each player to choose

//addEventListener to listen for which button was selected $(#Image).addEventListener.html(imageArray)


