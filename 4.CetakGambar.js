function cetakGambar(parameter){
    if(parameter %2 == 0){
        console.log("Parameter harus Bernilai Ganjil")
    }else{
        var gambar = ''
        var st = parameter - parameter + 1
        var center = parameter - ((parameter-1)/2)
        for(var i = 1; i <= parameter; i++) {
            for(var j = 1; j<=parameter; j++){ 
                if(i == st || i == parameter){
                    gambar += 'X '                   
                }else{
                    if(j == center){
                        gambar += 'X '
                    }else{
                    gambar += '= '
                    }
                }       
            }
            gambar += '\n'

            }
        }      
    
        return gambar
}


console.log(cetakGambar(7))