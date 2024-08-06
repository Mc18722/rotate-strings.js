function rotateString(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    
    if (s === goal) {
        return true;
    }
    
    const doubleS = s + s;
    
    return doubleS.includes(goal);
}

console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced")); 
console.log(rotateString("rotieren", "enrotier")); 
console.log(rotateString("hallo", "ohall")); 
console.log(rotateString("programmieren", "grammierenpro")); 
console.log(rotateString("katze", "hund")); 
console.log(rotateString("abc", "cab")); 
