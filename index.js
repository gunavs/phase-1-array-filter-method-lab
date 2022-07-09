// Code your solution here
function findMatching(someArray,someString) {
    let matches = someArray.filter(item => (item.toLowerCase() === someString.toLowerCase()));
   return matches;
}


function fuzzyMatch(someArray,beginningLetters) {
    let matches = someArray.filter(item => (item.indexOf(beginningLetters) == 0));
    return matches;

}

function matchName(someObject,someString) {
        let matches = someObject.filter(item => (item.name === someString));
        return matches;
    
    
}

