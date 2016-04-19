//Use this file to implement Part One of your project

//Objects
var animal = {};

animal.username = 'OlliTheOx';

console.log(animal.username);

animal['tagline'] = 'I"m an Ox of an Ox.';

console.log(animal['tagline']);

console.log(animal);

var count = 0;
for(var key in animals) {
	count++;
	if(key === 'username') {
		console.log('Hi my name is ' + animals.key)
	} else  if(key === 'tagline') {
		console.log("I like to say " + animals.key)
	}
}

//can't return inside of a loop causes illegal return statement. Can only return in a function as it ends a function execution and returns the specified value.

//Arrays
var noises = ["Grunts"];

noises.unshift("Moo");

noises.push("Earth Rattles with each step sounds");

noises[3] = "smoke blowing out of snout"

console.log(noises);
console.log(noises.length); //=4
//console.log(noises[noises.length]); //undefined
console.log(noises[noises.length - 1]); //smoke blowing out of snout is the last index

//.length is the number of values in an array 
//index in an array starts at 0 so if you have 4 values in your array the last index would be 3.

animal.noises = noises; 

console.log(animal);

var animals = [];

animals.push(animal);
var quakers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }

animals.unshift(quakers);

console.log(animals);

var wolf = { username: 'AlphaWolf', tagline: 'I"m above everyone. And they Know it.', noises: ['snarl', 'bark', 'howl', 'growl'] }

animals[animals.length] = wolf;

console.log(animals);

var fox = { username: 'Foxy', tagline: 'You can" catch this sly fox', noises: ['bark', 'yip', 'scream', 'growl'] }

animals.unshift(fox);

console.log(animals);

console.log(animals.length);

//Functions

var AnimalTestUser = function(username) {
	var otherArgs = [];
	if(arguments.length > 1) {
		for(var i = 0; i < arguments.length; i++) {
			otherArgs.push(arguments[i]);
		}
	}
	return {
		username: username,
		otherArgs: otherArgs
	}
}

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true});

console.log(testSheep.username);

var AnimalCreator = function(username, species, tagline, noises) {
	return {
		username: username,
		species: species,
		tagline: tagline,
		noises: noises,
		friends: []
	}
};

var pig = AnimalCreator("Piglet", "Pig", "Oh Pooh", ["oink", "snort"]);
						
var owl = AnimalCreator("Owling", "Bird", "Who", ["who", "screech"]);

var dog = AnimalCreator("Fido", "Canine", "Where's the food", ["bark", "howl"]);


var addFriend = function(animal, friend) {
	animal.friends.push(friend.username);
};

addFriend(pig, owl);
addFriend(owl, pig);
addFriend(dog, owl);
addFriend(owl, dog);


var myFarm = [pig, owl, dog];
console.log(myFarm);

var addMatchesArray = function(farm) {
	for(var animal in farm) {
		farm[animal].matches = [];
	}
};

addMatchesArray(myFarm);


var giveMatches = function(farm) {
	for(var animal in farm) {
		farm[animal].matches.push(farm[animal].friends[0]);
	}
	
}

giveMatches(myFarm);

console.log(owl.matches)
