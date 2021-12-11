
const calculateCharacter = () => {

//To start, create a variable named 'tweet', and set it equal to some paragraph:
let tweet = prompt("insert your tweet");

//Use '.length' to count tweet characters. Set this to another variable named 'tweetCount':
let tweetCount = tweet.length;
console.log(tweetCount);

//Set another variable to 'tweetLeft' to count how many characters left. Use maksimum 150 characters:
let tweetLeft = 150-tweetCount;
alert(`You have written ${tweetCount} characters. You have ${tweetLeft} characters remaining.`)

//send the same message to the console:
console.log("You have written", tweetCount, "characters. You have", tweetLeft, "characters remaining.")
}

// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
