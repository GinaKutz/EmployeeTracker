var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.unshift("Canis Major");

console.log(constellations);

planets.splice(5,1);

console.log(planets);

var galaxy=constellations.concat(planets);

console.log(galaxy);
console.log(constellations);
console.log(planets);

var upperCase=star.toLocaleUpperCase();

console.log(upperCase);

