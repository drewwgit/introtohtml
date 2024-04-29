function logIn(username, password){

    // if the user does not input a username OR password, the function should return false, otherwise should return true if both values have SOME information inside 
    if(username.legnth===0 || password.length===0) {
        return false
    } else if (username==="drew" && password==="pass"){
        return true 
    } else {
        return false
    }
}

//allows access if the user puts in the credentials correctly, otherwise prompts an error 
function createAccount(email, password){
    if(email.legnth===0 || password.length===0) {
        return false
     } else if (email==="drew@gmail.com" && password==="pass"){
        return true
     }  else {
        return false 
        }
}

function googleSignOn(email){
    if (email.includes("@gmail.com")){
        return true
    } else {
        return false
    }
}



module.exports = {logIn, createAccount, googleSignOn}
