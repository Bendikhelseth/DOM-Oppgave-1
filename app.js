// Oppgave 1

const fbtn = document.querySelector('#btn1');

fbtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const inputfield = document.querySelector('#text').value;
    const inputfield2 = inputfield - 32;
    console.log(inputfield2 / 1.8);
})

const fbtn2 = document.querySelector('#btn2');

fbtn2.addEventListener('click', function(e) {
    e.preventDefault();
    
    const inputfield3 = document.querySelector('#text').value;
    const inputfield4 = inputfield3 * 1.8;
    console.log(inputfield4 + 32);
})

// Oppgave 2

var textinput1 = document.querySelector('#text1')
var textinput2 = document.querySelector('#text2')
var print = document.querySelector('#printbtn')

textinput1.value = Math.round(Math.random() * (10 - 0) + 0);
textinput2.value = Math.round(Math.random() * (10 - 0) + 0);

print.addEventListener('click', function(){
    var n1 = textinput1.value
    var n2 = textinput2.value

    if(n1 > n2){
        console.log(n1, ' er større enn ', n2)
    }
    else if(n1 < n2){
        console.log(n1, ' er mindre enn ', n2)
    }
    else console.log(n1, ' er lik som ', n2)
})

// Oppgave 3



const check = document.querySelector('#check')

check.addEventListener('click', function(){

    var mittOrd = document.querySelector('#ord').value;

    var temp = mittOrd.split('').reverse().join('');
    console.log(temp);
    

    if(mittOrd === temp) {
        console.log('Dette ordet er palendrom')
    }
    

})

// Oppgave 4

const firstBtn = document.querySelector('#redbtn')

firstBtn.addEventListener('click', function(){
    document.querySelector("#divBox1").style.backgroundColor = "red";
})



firstBtn.addEventListener('dblclick', function(){
    document.querySelector("#divBox1").style.backgroundColor = "white";
})

const secondBtn = document.querySelector('#bluebtn')

secondBtn.addEventListener('click', function(){
    document.querySelector("#divBox2").style.backgroundColor = "blue";
})

secondBtn.addEventListener('dblclick', function(){
    document.querySelector("#divBox2").style.backgroundColor = "white";
})

const thirdBtn = document.querySelector('#randombtn')

thirdBtn.addEventListener('click', function(){
    const colorList = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey"]

    var randomColor = Math.round(Math.random()*colorList.length)


    document.querySelector("#divBox3").style.backgroundColor = colorList[randomColor];
})

thirdBtn.addEventListener('dblclick', function(){
    document.querySelector("#divBox3").style.backgroundColor = "white";
})
