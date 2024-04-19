//prompts the user to enter flavors seperated by commas 
const flavorInputString = prompt(
    "Please enter your desired froyo flavors seperated by a comma",
    "flavor,flavor,flavor,flavor,flavor,flavor"
  );
  

const flavorArray = flavorInputString.split (",");

const flavorCount = {};

flavorArray.forEach(function(flavor) {
    flavor = flavor.trim();
    if (flavorCount[flavor]) {
        flavorCount[flavor]++;
    } else {
        flavorCount[flavor] = 1; 
    }
}); 

console.log("Froyo Flavor Counts: ");
console.log(flavorCount)




// function getFlavors(stringArray) {
//     return stringArray;  
// }

// console.log(stringArray)

// function countFlavors () {
//     let v = "vanilla";
//     let s = "strawberry";
//     let c = "coffee";
//     console.log(v.match(countFlavors).length)
// }