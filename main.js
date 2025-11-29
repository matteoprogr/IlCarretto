// Seleziona tutti i link della navbar e le sezioni
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');

// Funzione per mostrare la sezione corretta
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active'); // Nasconde tutte le sezioni
        if (section.id === sectionId) {
            section.classList.add('active'); // Mostra la sezione selezionata
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); // Rimuove evidenziazione dai link
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active'); // Evidenzia il link selezionato
        }
    });
    showHome();
}

// Aggiungi l'evento click a tutti i link della navbar
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = link.getAttribute('href').substring(1);
         if(targetSection === "home"){ showHome(); }
        showSection(targetSection);

    });
});

showSection('home');


async function showHome(){
const homeGrid = document.getElementById('home-grid');
homeGrid.innerHTML = "";
const homeImg = [
    {img: "img/01.jpg"},
    {img: "img/02.jpg"},
    {img: "img/03.jpg"}
];
    homeImg.forEach(hImg => {
        const item = document.createElement('div');
        item.classList.add('home-item');

        const img = document.createElement('img');
        img.src = hImg.img;
        //img.alt = img.nome;

        item.appendChild(img);

        homeGrid.appendChild(item);
    });
}


