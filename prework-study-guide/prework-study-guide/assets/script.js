// This is code is meant to choose a topic for us to study from the array below
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
// This is the variable that iterates through the array to choose a random topic
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
// This function lists all our topics in the array topics 
function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

// This function below just adds text to the topic within the console for a personal touch 
function selectTopics(){
if (randomTopic === 'HTML') {
 console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
 console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
 console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
}
// These logs to console tell the user what we have learned and what to study 
console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("Which topic should we study first?");
selectTopics();
// These functions below are the first iteration of a show more button for long notes as it will save space on the page
function show() {
    document.getElementById("show1").onclick
    document.getElementById("longNote1").style.height= "auto";
    document.getElementById("longNote1").style.width= "auto";
    document.getElementById("longNote1").style.overflow= "visible"; 
}
function hide() {
    document.getElementById("show1").ondblclick
    document.getElementById("longNote1").style.height= "25px";
    document.getElementById("longNote1").style.width= "auto";
    document.getElementById("longNote1").style.overflow= "hidden";
}

