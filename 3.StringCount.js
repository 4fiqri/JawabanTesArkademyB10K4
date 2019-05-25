function vocal(text){
    var aiueo = text.toUpperCase()
    var hapus = aiueo.replace(/['A','I','U','E','O']/g,'');
    var aw = aiueo.length
    var ak = hapus.length
    // var hasil = `jumlah huruf vocal pada kalimat ${aiueo} ada sebanyak ${aw - ak}`
    // var hasilhapus = 'setelah hurup vocal dihapus, kalimat '+aiueo+ ' menjadi '+hapus
    return aw-ak
    }
    console.log (vocal('programmer'))
