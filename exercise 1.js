String.prototype.filter = function (bannedWords) {
    let wordsArray = this.split(' ');
    let filteredArray = wordsArray.filter(word => !bannedWords.includes(word));
    return filteredArray.join(' ');
};

// Example usage:
console.log("This house is not nice!".filter(['not'])); // Output: "This house is nice!"
