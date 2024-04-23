// main heading of the page 

// titles of the page 

const freetitle = document.createElement("h1");
freetitle.innerHTML = "Freelancer Forum";
document.body.appendChild(freetitle);
freetitle.style.color = "blue";
freetitle.style.textAlign = "center";

const pricetitle = document.createElement("p");
pricetitle.innerHTML = "The average starting price is $30";
document.body.appendChild(pricetitle);
pricetitle.style.textAlign = "center";


const availabletitle = document.createElement("h1")
availabletitle.innerHTML = "Available Freelancers";
document.body.appendChild(availabletitle);
availabletitle.style.textAlign = "center";


// box creation for board 
const box = document.createElement("div");
box.style.display = "flex";
box.style.justifyContent = "space-around";
box.style.paddingLeft = "30px";
document.body.appendChild(box);

// titles of the board 
const nametitle = document.createElement("h2");
nametitle.innerHTML = "Name";
box.appendChild(nametitle);

const occupations = document.createElement("h2");
occupations.innerHTML = "Occupation";
box.appendChild(occupations);

const startingPrices = document.createElement("h2");
startingPrices.innerHTML = "Starting Price";
box.appendChild(startingPrices);

// name 
const names = ["Alice", "Bob", "Carol"];

// //occupation 
// const occu = ["Writer", "Teacher", "Programmer"];

// // start price 
// const prices = ["$30", "$50", "$70"];


// box creation for board 
const box2 = document.createElement("div");
box2.style.display = "flex";
box2.style.justifyContent = "space-around";
box2.style.fontSize = "20px"; 
box2.style.paddingRight = "20px";
document.body.appendChild(box2);

const freenames = document.createElement("p");
freenames.innerHTML = "Alice";
box2.appendChild(freenames);

const freeoccu = document.createElement("p");
freeoccu.innerHTML = "Writer"
freeoccu.style.paddingRight = "10px";
box2.appendChild(freeoccu);

const freeprice = document.createElement("p");
freeprice.innerHTML = "$30"
box2.appendChild(freeprice);

// box creation for board 

const box3 = document.createElement("div");
box3.style.display = "flex";
box3.style.justifyContent = "space-around";
box3.style.fontSize = "20px"; 
box3.style.paddingRight = "20px";
document.body.appendChild(box3);

// 2nd line of freelancers 

const freenames2 = document.createElement("p");
freenames2.innerHTML = "Bob";
box3.appendChild(freenames2);

const freeoccu2 = document.createElement("p");
freeoccu2.innerHTML = "Teacher"
freeoccu2.style.paddingRight = "10px";
box3.appendChild(freeoccu2);

const freeprice2 = document.createElement("p");
freeprice2.innerHTML = "$50"
box3.appendChild(freeprice2);

// box creation 

const box4 = document.createElement("div");
box4.style.display = "flex";
box4.style.justifyContent = "space-around";
box4.style.fontSize = "20px"; 
box4.style.paddingRight = "20px";
document.body.appendChild(box4);

// 3rd line of freelancers 

const freenames3 = document.createElement("p");
freenames3.innerHTML = "Carol";
box4.appendChild(freenames3);

const freeoccu3 = document.createElement("p");
freeoccu3.innerHTML = "Programmer"
freeoccu3.style.paddingRight = "10px";
box4.appendChild(freeoccu3);

const freeprice3 = document.createElement("p");
freeprice3.innerHTML = "$70"
box4.appendChild(freeprice3);



// //div 

// const container = document.createElement("div");
// container.style.display = "flex";
// container.style.justifyContent = "center";
// container.style.fontSize = "20px";


// container.appendChild(names);

// // creating the boxx 

// const boxx = (headerText, contentArray) => {
//     const boxx = document.createElement("div");
//     boxx.style.margin = "20px";
//     boxx.style.width = "250px";

//     const header = document.createElement ("h3");
//     header.innerHTML = headerText; 
//     boxx.appendChild(header); 

//     // for each content array 

//     contentArray.forEach(item => {
//         const paragraph = document.createElement("p");
//         paragraph.innerHTML = item; 
//         boxx.appendChild(paragraph);
//     });

// }























// const freelancers = [
//     { name: "Dr. Slice", price: 25, occupation: "gardener" },
//     { name: "Dr. Pressure", price: 51, occupation: "programmer" },
//     { name: "Prof. Possibility", price: 43, occupation: "teacher" },
//     { name: "Prof. Prism", price: 81, occupation: "teacher" },
//     { name: "Dr. Impulse", price: 43, occupation: "teacher" },
//     { name: "Prof. Spark", price: 76, occupation: "programmer" },
//     { name: "Dr. Wire", price: 47, occupation: "teacher" },
//     { name: "Prof. Goose", price: 72, occupation: "driver" },
//   ];

// fbox.forEach((i, idx)=>{
//     i.innerHTML=freelancers[idx].name;
// })
