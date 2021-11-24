var adjacentRooms =
[
   [1, 4, 7],   [0, 2, 9],   [1, 3, 11],   [2, 4, 13],    [0, 3, 5],
  [4, 6, 14],  [5, 7, 16],    [0, 6, 8],   [7, 9, 17],   [1, 8, 10],
 [9, 11, 18], [2, 10, 12], [11, 13, 19],  [3, 12, 14],  [5, 13, 15],
[14, 16, 19], [6, 15, 17],  [8, 16, 18], [10, 17, 19], [12, 15, 18]
];
var currentRoom = 0;
var roomNumber = 0;
var shootRoom = 0;
var batRoom = 0;
var wumpusRoom = 0;
var pitRoom = 0;
var score = 0;
var killRoom = 0;
var turns = 0;

function createCave()
{

	document.getElementById('killMsg').innerHTML = "";

alert("The create cave function is working")
// The adjacentRooms rectangular array is the core of the Dodecahedron cave. 
// It is a 2D array that lists each room and which rooms are adjacent to that room.
// It essentially encodes the design of the cave into an array.
// For example, the first element of adjacentRooms states that room 0 is adjacent to rooms 1, 4, 7. Next room 1 is adjacent to rooms 0, 2, and 9.
// If you look at the dodecahedron cave design picture in the instructions you will see how those numbers map to that design.

// Save the total number of rooms in a more user-friendly variable name
//numRooms = adjacentRooms.GetLength(0);

//document.getElementById('showGame').setAttribute(".gameContainer", "display: contents")
// var x = document.getElementById("showGame");
//x.style.display = "block";
//document.getElementById('currentRoom').innerHTML = myStartRoom;
myStartNumber = Math.floor(Math.random() * adjacentRooms.length);
wumpusRoom = Math.floor(Math.random() * adjacentRooms.length);
batRoom = Math.floor(Math.random() * adjacentRooms.length);
	while (batRoom == wumpusRoom)
		{batRoom = Math.floor(Math.random() * adjacentRooms.length);}
//alert("This is the wumpus room Number" + wumpusRoom)
//alert("This is the bat room Number" + batRoom)
score = 0;	
document.getElementById('score').innerHTML = score;

//

//currentRoom = myStartNumber;
//myStartRoom = adjacentRooms[myStartNumber];
//document.getElementById('currentRoomArray').innerHTML = myStartNumber;
//document.getElementById('currentRoom').innerHTML = myStartRoom ;

currentRoom = myStartNumber;
//alert("This is the first room " + adjacentRooms[currentRoom][0]);

roomTest = adjacentRooms[myStartNumber][0];
document.getElementById('firstButton').innerHTML = adjacentRooms[currentRoom][0];
document.getElementById('secondButton').innerHTML = adjacentRooms[currentRoom][1];
document.getElementById('thirdButton').innerHTML = adjacentRooms[currentRoom][2];

var x = document.getElementById("startButton");
x.style.display = "none";
var y = document.getElementById("showGame");
y.style.display = "block";
checkRoom(currentRoom);

}

function turnCheck(turns){
	alert("Turn function is working My number of turns is" + turns)
	if (turns <= 10)
	{
		alert("The number of turns is less than 10")
	}
	else{
		alert("The number of turns is MORE than 10")
	}
}

function roomTurn(roomCase)

{	alert("My number of turns is" + turns)
	turns += 1;
	score += 10;
	document.getElementById('score').innerHTML = score;
	
switch (roomCase)
{
		case 1: 
		
	var roomNumber = document.getElementById("firstButton").textContent;

	 checkRoom(roomNumber);
	

document.getElementById('firstButton').innerHTML = adjacentRooms[roomNumber][0];
	document.getElementById('secondButton').innerHTML = adjacentRooms[roomNumber][1];
	document.getElementById('thirdButton').innerHTML = adjacentRooms[roomNumber][2];

			//return "tie";
		break;


		case 2:

	var roomNumber = document.getElementById("secondButton").textContent;
checkRoom(roomNumber);

document.getElementById('firstButton').innerHTML = adjacentRooms[roomNumber][0];
	document.getElementById('secondButton').innerHTML = adjacentRooms[roomNumber][1];
	document.getElementById('thirdButton').innerHTML = adjacentRooms[roomNumber][2];


			//return "computer";
		break;
		
		case 3: 


	var roomNumber = document.getElementById("thirdButton").textContent;

checkRoom(roomNumber);
	document.getElementById('firstButton').innerHTML = adjacentRooms[roomNumber][0];
	document.getElementById('secondButton').innerHTML = adjacentRooms[roomNumber][1];
	document.getElementById('thirdButton').innerHTML = adjacentRooms[roomNumber][2];


			//return  "you";
		break;
		
}




}


function checkRoom(roomNumber)
	{

	if (roomNumber == wumpusRoom)
		{
		
		document.getElementById('msg').innerHTML = "The wumpus ate you!!! - Game over!!";
		document.getElementById('msg2').innerHTML = "Do you want to play again?";
		var z = document.getElementById("againButton");
		z.style.display = "block";
		}
	else if (roomNumber == batRoom)
		{

		document.getElementById('msg').innerHTML = "Flying Bats - Aaah!!! You lose 10 points";
		}

		//HEre is the else if for checking adjacent rooms
		//HEre is the else if for checking adjacent rooms
		//HEre is the else if for checking adjacent rooms

	else 
		{ 
		
			document.getElementById('msg').innerHTML = "Tunnels lead to rooms";
			document.getElementById('msg2').innerHTML = "Click on a room number to hunt the Wumpus";
			
		///-----------------
		for (j = 0; j < 3; j++)
		{	
			if (adjacentRooms[roomNumber][j] == wumpusRoom)
			{
				shootRoom = roomNumber;
				document.getElementById('msg').innerHTML = "There is a horrible stench";
				document.getElementById('killMsg').innerHTML = "Choose a room to shoot your arrow into";
				killWumpus(shootRoom)
				//if (killQuestion == "yes")
				//	{
				//		killWumpus(roomNumber)
				//	}
				//run killWumpusFunction
			
			}
			else if (adjacentRooms[roomNumber][j] == batRoom)
			{
				document.getElementById('msg').innerHTML = "You hear the flapping of wings";
			}	
			
		}//end for loop


		///----------------
	} //end else
		//HEre ends else if for checking adjacent rooms
		//HEre ends else if for checking adjacent rooms
		//HEre ends else if for checking adjacent rooms

} // end function

function killWumpus(shootRoom)

{
	//killWumpusBoard
	var kw = document.getElementById("killWumpusBoard");
		kw.style.display = "block";
	document.getElementById('killMsg').innerHTML = "The time has come: Choose a room to shoot into below or choose another room above and continue the journey";
	document.getElementById('firstKillButton').innerHTML = adjacentRooms[shootRoom][0];
	document.getElementById('secondKillButton').innerHTML = adjacentRooms[shootRoom][1];
	document.getElementById('thirdKillButton').innerHTML = adjacentRooms[shootRoom][2];
	//we need to bring up kill options
}

function killEval(killRoom)
{
	var kwb = document.getElementById("killWumpusBoard");
		kwb.style.display = "none";


	if (adjacentRooms[shootRoom][killRoom] == wumpusRoom)
	{
		document.getElementById('killMsg').innerHTML = "You kill wumpus - you win";
		
	}
	else
	{
		document.getElementById('killMsg').innerHTML = "You failed to kill wumpus - he eat you.";

	}

	var z = document.getElementById("againButton");
	z.style.display = "block";
}

