/**
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.nextElementSibling.classList.add('visible')
    this.parentNode.removeChild(this);
})

*/

//On recupère la liste des .spoiler
let spoilerlist = document.querySelectorAll('.spoiler');

//On craît le block button spoil
let createblock = function(element)
{

    //On crée le boutton et on l'ajoute en tant que fils à l'élément courant 
    let button = document.createElement('button');
    button.textContent = 'Afficher le spoil';

    //On crée le span et on l'ajoute à l'élément courant
    let span = document.createElement('span');
    span.className = "spoiler-content";
    span.innerHTML = element.innerHTML;

    //On rajoute les éléments au DOM dans l'odre désiré
    element.innerHTML = '';
    element.appendChild(button);
    element.appendChild(span);

    //On rajoute l'écouteur d'évènement
    button.addEventListener('click', function(){
        button.parentNode.removeChild(button);
        span.classList.add('visible');
    })
}

//On ajoute un ecouteur d'evènement sur chaque spoil
for(let spoil of spoilerlist)
{
    createblock(spoil);
}