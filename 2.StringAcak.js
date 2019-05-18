function generateString(param) {  
    var arr = []
    var length = 32
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i =0; i < param; i++){
        for(var j = 0; j < length; j++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            
        }
        arr.push(text)
        text = ""
    } 
    return arr;
}

console.log(generateString(2))
