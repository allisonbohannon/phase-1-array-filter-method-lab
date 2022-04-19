// Code your solution here
function findMatching(arr, str) {
    return arr.filter(item => item.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(arr, str) {
    return arr.filter(item => item.slice(0, str.length) === str); 
}

console.log(fuzzyMatch([ 'Sammy', 'Sarah', 'Sally' ], 'S')); 

function matchName(arr, str) {
    return arr.filter(item => item.name === str); 
}; 

