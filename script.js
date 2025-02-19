// je séléctionne et je stock 
// /la div switch

const switchBox = document.querySelector('.switch');
console.log('SwitchBox');
// la DIV btn (le cercle)
const btn = document.querySelector('.btn'); 
console.log(btn);
// l'icône
const icone = document.querySelector('i');
// La div container
const ccontainer = document.querySelector('.container');
// le titre
const titre = document.querySelector('h1');
console.log(titre);

// je soumets la DIV switch à une action au clic
switchBox.addEventListener('click', function(){
    console.log('DIV cliqué !');

    // je déplace le cercle
// j'utilise .classList.toggle
btn.classList.toggle('btn-change');

// je déplace l'icone
icone.classList.toggle('icone-change');

// je change l'icone
icone.classList.toggle('fa-sun');

/* La DIV container change de couleur de fond */
ccontainer.classList.toggle('container-change');

// Je modifie le texte du titre
titre.innerText = "LIGHT MODE";

// Je modifie le texte du titre

if(titre.innerText === "DARK MODE"){
    titre.innerText = "LIGHT MODE";
}else{
    titre.innerText = "DARK MODE";
}

});


