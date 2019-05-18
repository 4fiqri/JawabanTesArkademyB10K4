var bio = {
    name: "Fiqri",
    address: "Bandung",
    hobbies: ["Tidur", "Makan", "Main"],
    is_married: false,
    school: {highSchool: "SMA Xaverius 1 Belitang",university: "STKIP Nurul HUda Sukaraja"},
    skills: [{skill: "office",score: 75}, {skill: "javaScript",score: 30}, {skill: "autocad",score: 70}, {skill: "english",score: 65}]}


function myBio(x){

var myJSON = JSON.stringify(x);
return myJSON
    
}

console.log(myBio(bio))

