function cetakGambar(parameter){
    if(parameter %2 == 0){
        console.log("Parameter harus Bernilai Ganjil")
    }else{
        var jumlah = 0
        for(var i = 0; i < parameter; i++) {
            for( var j=0; j=i; j++){ 
                jumlah++
            }    
            jumlah =+ '\n'      
        }      
    }
        return jumlah
}


console.log(cetakGambar(4))