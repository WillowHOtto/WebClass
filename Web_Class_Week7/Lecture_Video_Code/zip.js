function isMinnesotaZip(code){
    //MN zip code range is 55001 and 56763
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip(55403)) // true
console.log(isMinnesotaZip(12345)) // false
console.log(isMinnesotaZip(55001)) // true
console.log(isMinnesotaZip(-999999999)) // false

//strings and numbers work. 
