function userPrompt () {
    //declare variables    
    var username;
    var pwd;
    var user1="brad";
    var user2="jeff";

    //prompt for username and password
    username=prompt("Username: ", "enter username in this box");
    pwd=prompt("Password: ", " ");

    verifyUser(username,pwd, user1, user2);
}

function verifyUser(username, pwd, user1, user2) {

    if (username == user1 || username == user2) {
        alert("Welcome, " + username + "!");
        alert("Here's your pwd: " + pwd);
    } else {
        alert("Sorry, you are not a recognized user.");
    }
}