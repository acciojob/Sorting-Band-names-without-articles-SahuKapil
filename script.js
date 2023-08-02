// The initial array with place names
let arr = ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple'];

// The map function is used to create a new array of place names after filtering out the articles "a", "an" and "the"
let updatedList = arr.map((element) => {
	// Split the place name into words
	let words = element.split(" ") ;

	// Use the reduce function to iterate through each word of the place name and filter out articles
	let updatedString = words.reduce((prev, current, index) => {
		if(current != "The" && current != "an" && current != "a"){
			// If the word is not an article, add it to the updated string
			return prev + " " + current ;
		}
		// Otherwise, return the previous string
		return prev ;
	}, "")

	// Return the updated string for this place name
	return updatedString ;
}) ;

// Create a new object that maps each updated place name to its original place name
let mp = {} ;
updatedList.forEach( (element, index) => {
	mp[element] = arr[index] ;
});

// Sort the updated place names alphabetically
updatedList.sort(); 

// Create a final array of place names by looking up the original place names using the mapping object
let finalAns = updatedList.map((element) => {
    return mp[element] ;
})

// Output the final array of place names
console.log(finalAns); 
