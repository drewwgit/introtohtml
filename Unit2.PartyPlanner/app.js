let data = "";
const wrapper = document.getElementById("wrapper");



// grabs the initial promise 

async function myFunction() {

    const response = await fetch ("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events")
    const data = response.json(); 
    return data; 
    
};

console.log(myFunction)

myFunction().then((response)=> {
        createEvent(response.data);
    }
);


function createEvent(info){
    info.forEach((i) =>{

    //creates all HTML elements 
    const partydivEle = document.createElement("div");
        const partynameEle = document.createElement("h2");
        const descriptionEle = document.createElement("p");
        const dateEle = document.createElement("p");
        const timeEle = document.createElement("p");
        const locEle = document.createElement("p");
        const buttonEle = document.createElement("button")

    partydivEle.setAttribute("class", "party");

    // Adds element to HTML 
    
    partynameEle.innerHTML=i.name; 
    descriptionEle.innerHTML=i.description; 
    dateEle.innerHTML=i.date;
    timeEle.innerHTML=i.date; 
    locEle.innerHTML=i.location; 
    buttonEle.innerHTML="Delete";


    // Append child each element 
   
    container.appendChild(partydivEle);
    partydivEle.appendChild(partynameEle);
    partydivEle.appendChild(descriptionEle);
    partydivEle.appendChild(dateEle);
    partydivEle.appendChild(timeEle);
    partydivEle.appendChild(locEle);
    partydivEle.appendChild(buttonEle);

    //styling

    partydivEle.style.border= "1px black";
        partydivEle.style.margin="10px";
        partydivEle.style.background="lightpurple"; 
        partydivEle.style.boxSizing="border-box";


});
}