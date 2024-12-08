// JavaScript Document
console.log("hi");

//javascript voor hamburger menu
const menuButton = document.querySelector("header nav button");

menuButton.addEventListener("click", openMenu);

function openMenu() {
    const nav = document.querySelector("header nav");
    nav.classList.toggle("showMenu");
}

//javascript voor carousel
let gallery = 0 

const buttonBack = document.querySelector('.back'); 
const buttonForth = document.querySelector('.forth');
const imgGallery = document.querySelector('.gallery');

const galleryArray = ['detail_gallerij_1_1.jpg','detail_gallerij_2_1.jpg'] //zodat de afbeeldingen kunnen veranderen

function changeGallery() { //Deze functie zorgt ervoor dat het plaatje veranderd wanneer ik op de knop druk, maar niet verder gaat als ik bij het laatste plaatje ben
    if (gallery < galleryArray.length -1) { //array.length - 1 geeft het einde van je array aan
        gallery++ //gallery = gallery + 1
        imgGallery.src = 'images/'+galleryArray[gallery]; 
    }
}

function galleryBack() {
    if (gallery <= galleryArray.length -1) { // als 0 <= 3 is dan haalt hij er 1 van af
        gallery-- //gallery = gallery - 1
        if (gallery < 0) { //Hier wordt gezegd dat als gallery < 0 dan wordt het 0
            gallery = 0 
        }
        imgGallery.src = 'images/'+galleryArray[gallery];            
     }     
}

buttonBack.addEventListener("click", changeGallery)
buttonForth.addEventListener("click", galleryBack)

