var games = ["CS1.6", "Dota2", "GTA:SA","Poker","IGI","BattleField"];
console.log(games);

games.splice(2,0,"new1","new2");
console.log(games);

/* Splice(n1, n2, items);
n1 = start from this index
n2 = remove n2 number of elements
items = add these elements after removing n2 elements starting from n1
*/

/* splice(x,y);
removing y elements starting from index x while appending nothing
*/
games.splice(2,3);
console.log(games);

