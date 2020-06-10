const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

function prikaziNav () {
    nav.classList.toggle('nav-active');
}
const noviText = document.getElementById('noviText');
const prosiriText = document.getElementById('prosiriText');
const vratiPrviText = document.getElementById('vratiPrviText');

prosiriText.style.cursor = 'pointer';
vratiPrviText.style.cursor = 'pointer';
noviText.style.display = 'none';

prosiriText.addEventListener('click', function() {
    noviText.style.display = 'block';
    prosiriText.style.display = 'none';
});

vratiPrviText.addEventListener('click', function() {
    prosiriText.style.display = 'block';
    noviText.style.display = 'none';
});

var viseTexta = document.getElementById('vise-texta');
var drugiText = document.getElementById('drugi-text');
var brisiDrugiText = document.getElementById('brisi-drugi-text');

drugiText.style.display='none';

viseTexta.addEventListener('click', function (){
    drugiText.style.display= 'block';
    brisiDrugiText.style.display='block';
    viseTexta.style.display='none';
});

brisiDrugiText.addEventListener('click', function (){
    drugiText.style.display='none';
    brisiDrugiText.style.display='none';
    viseTexta.style.display='block';
});

var modal = document.getElementById('modal');
var modalButton=document.getElementById('modal-button');
var izadji = document.getElementById('izadji');

modal.style.display='none';

modalButton.addEventListener('click', function (){
    modal.style.display='block';
});
izadji.addEventListener('click', function(){
    modal.style.display='none';
});



var changecolor=document.getElementById('changecolor');
var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#B3B31A', '#00E680',
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
var main = document.getElementById('main');
changecolor.addEventListener('click',changing);
function changing(){
    var random=Math.floor(Math.random()*colors.length);
    main.style.background=colors[random];
}



