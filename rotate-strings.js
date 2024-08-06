function rotateString(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    
    if (s === goal) {
        return true;
    }
    for(let i = 0; i < s.length-1; i++) {
        s = rotateLeft(s);
        if (s === goal) {
            return true;
        }
    }
    return false;
}

function rotateLeft(txt) {
    const chars = txt.split("");
    const tmp = chars [0];
    for (let i = 1; i < chars.length; i++) {
        const char = chars [i];
        chars [i-1] = char;
    }     
    chars[chars.length-1] = tmp;
    return chars.join("");
}

console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced")); 
console.log(rotateString("rotieren", "enrotier")); 
console.log(rotateString("hallo", "ohall")); 
console.log(rotateString("programmieren", "grammierenpro")); 
console.log(rotateString("katze", "hund")); 
console.log(rotateString("abc", "cab")); 
