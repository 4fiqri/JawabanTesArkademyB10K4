function beetweenDays(from, to){
    
    var list = []
    var st = from
    var end = to
    var dateMove = new Date(st) //2019-11-01T00:00:00.000Z
    var st = st

    while (st < end){
        var st = dateMove.toISOString().slice(0,10) // // dateMove.toISOString() ( change to string using ISO standard format ISO-8601: YYYY-MM-DDTHH:mm:ss.sssZ)/agar bisa di slice => 2019-11-01
        list.push(st)
        hasil = list.toString()
        dateMove.setDate(dateMove.getDate()+1)

    }
    return hasil
}

console.log(beetweenDays('2019-11-01','2019-11-05'))

// dateMove.getDate() => 1
// dateMove.setDate(dateMove.getDate()+1) => 1572652800000