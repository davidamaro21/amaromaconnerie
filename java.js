let slideIndex = 0; // Index de la slide courante
let slides = document.getElementsByClassName("slide"); // Récupère toutes les slides
showSlides(); // Appelle la fonction pour afficher les slides

// Affiche la diapositive courante
function showSlides() {
    // Masquer toutes les slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Cache chaque slide
    }

    slides[slideIndex].style.display = "block"; // Affiche la slide courante
}

// Fonction pour changer de slide
function changeSlide(n) {
    slideIndex += n; // Change l'index de la slide selon le bouton cliqué

    // Réinitialise l'index si c'est en dehors des limites
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Retourne à la dernière slide
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Retourne à la première slide
    }

    showSlides(); // Affiche la nouvelle slide
}

// Attachement des événements de clic aux boutons de navigation
document.querySelector('.arrow-left').addEventListener('click', function() {
    changeSlide(-1); // Précédente slide
});

document.querySelector('.arrow-right').addEventListener('click', function() {
    changeSlide(1); // Diapositive suivante
});

// Affiche la première slide au début
showSlides();