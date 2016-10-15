var games = ["CS1.6", "Dota2", "GTA:SA","Poker"];
console.log(games);
console.log(games.length);

console.log(games.pop());
console.log(games);
console.log(games.push("BattleField"));

console.log(games);


// shift method removes element from start of array & decrements length of array.
console.log("games.shift()");
console.log(games.shift());
console.log(games);

//unshift adds element to the starting of array
console.log("games.unshift('COD, IGI')");
console.log(games.unshift("COD", "IGI"));
console.log(games);

console.log(games.shift());
console.log(games);