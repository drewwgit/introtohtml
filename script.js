const cohortName = "2404";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

//fetches all players from the API 

const fetchAllPlayers = async () => {
    try { 
      const response = await fetch(API_URL);
      const result = await response.json();
      console.log(result.data.players);
      return(result.data.players);

    } catch (err) {
      console.error("Uh oh, trouble fetching players!", err);
    }
};

// fetches a single player from the API. 

const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(API_URL+"/"+playerId);
      const result = await response.json(); 
    } catch (err) {
      console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

/**
 * Updates `<main>` to display a list of all players.
 *
 * If there are no players, a corresponding message is displayed instead.
 *
 * Each player is displayed in a card with the following information:
 * - name
 * - id
 * - image (with alt text of the player's name)
 *
 * Additionally, each card has two buttons:
 * - "See details" button that, when clicked, calls `renderSinglePlayer` to
 *    display more information about the player
 * - "Remove from roster" button that, when clicked, will call `removePlayer` to
 *    remove that specific player and then re-render all players
 *
 * Note: this function should replace the current contents of `<main>`, not append to it.
 * @param {Object[]} playerList - an array of player objects
 */

const renderAllPlayers = (playerList) => {
    wrapper.innerHTML = ""; 
    fetchAllPlayers().then((response) => {
        response.forEach((i) => {
            renderSinglePlayer(i)
        })
    })
};

console.log(renderAllPlayers);

/**
 * Updates `<main>` to display a single player.
 * The player is displayed in a card with the following information:
 * - name
 * - id
 * - breed
 * - image (with alt text of the player's name)
 * - team name, if the player has one, or "Unassigned"
 *
 * The card also contains a "Back to all players" button that, when clicked,
 * will call `renderAllPlayers` to re-render the full list of players.
 * @param {Object} player an object representing a single player
 */

const renderSinglePlayer = (player) => {
   // creates the const for all data within a single player 
   
    const divEle = document.createElement("div");
    const nameEle = document.createElement("h2");
    const idEle = document.createElement("p");
    const breedEle = document.createElement("p");
    const imgEle = document.createElement("img");
    const teamEle = document.createElement("p");


    // image attribute 

    imgEle.setAttribute("src", player.imageUrl)
    imgEle.setAttribute("alt", player.name)

    // button creation 

    const seeDetails = document.createElement("button");
    const removeButton = document.createElement("button");



    // adds HTML to the page for the players attributes
    nameEle.innerHTML = player.name; 
    idEle.innerHTML = player.id; 
    breedEle.innerHTML = player.breed; 
    imgEle.innerHTML = player.imageUrl;
    teamEle.innerHTML = player.teamId; 

        //button innerHTML 

        seeDetails.innerHTML = "See Just This Dog's Details";
        removeButton.innerHTML = "Remove Button";

    // appends each div to the overall wrapper

    // appends the attributes/details to the div 
    divEle.appendChild(nameEle);
    divEle.appendChild(idEle);
    divEle.appendChild(breedEle);
    divEle.appendChild(imgEle);
    divEle.appendChild(teamEle);
        
    // button append 

        divEle.appendChild(seeDetails);
        divEle.appendChild(removeButton);

        wrapper.appendChild(divEle);


    // button to go back to all 
    seeDetails.addEventListener("click", () => {
        wrapper.innerHTML = "";
        renderSinglePlayer(player);
    })
}


document.getElementById("AllDogs").addEventListener("click", ()=>{
    renderAllPlayers()
})
/**
 * Fills in `<form id="new-player-form">` with the appropriate inputs and a submit button.
 * When the form is submitted, it should call `addNewPlayer`, fetch all players,
 * and then render all players to the DOM.
 */
const renderNewPlayerForm = () => {
    try {
      // TODO
    } catch (err) {
      console.error("Uh oh, trouble rendering the new player form!", err);
    }
  };


  // fetch all players and render them to the DOM 

/**
 * Initializes the app by fetching all players and rendering them to the DOM.
 */
const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
  
    renderNewPlayerForm();
  };


// This script will be run using Node when testing, so here we're doing a quick
// check to see if we're in Node or the browser, and exporting the functions
// we want to test if we're in Node.
if (typeof window === "undefined") {
    module.exports = {
      fetchAllPlayers,
      fetchSinglePlayer,
    //   addNewPlayer,
    //   removePlayer,
      renderAllPlayers,
      renderSinglePlayer,
      renderNewPlayerForm,
    };
  } else {
    init();
  }
