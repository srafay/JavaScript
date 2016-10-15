var games = ["CS1.6", "Dota2", "GTA:SA","Poker","IGI","BattleField"];
console.log(games);

/* slice(x,y);
break array from index x;
till index y-1;
Note : copies nothing if x==y , y>x in general
*/
var newGames = games.slice(1,5);
console.log(newGames);
console.log(games);


var oldGames = games.slice(1,4);
console.log(oldGames);
console.log(games);