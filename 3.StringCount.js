function myCountChar(text,param){
    var arr = text.split("",text.length)
    var jumlah = 0

    for (var i = 0; i < arr.length; i++) {
            if (arr[i] == param) {
                jumlah++
            }                
    }
    return jumlah
}

console.log(myCountChar("arkademy", "k"))