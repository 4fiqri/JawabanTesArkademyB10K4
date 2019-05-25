function ganti_kata(kata,asal,jadi){
    var ganti = kata.toUpperCase().replace(new RegExp(asal, "g"), jadi)
    // var hasilhapus = 'setelah hurup vocal dihapus, kalimat '+aiueo+ ' menjadi '+hapus
    return ganti
    }
    console.log (ganti_kata('PURWAKARTA','A','O'))