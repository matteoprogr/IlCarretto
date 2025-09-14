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
         if(targetSection === "menu"){ showPiatti(); }
         if(targetSection === "home"){ showHome(); }
        showSection(targetSection);

    });
});

showSection('home');


// Array di piatti: puoi anche generarlo dinamicamente dal backend
const piatti = [
    {nome: "Broccoli e Salsiccia", descrizione: "Delizioso piatto con ingredienti freschi e genuini.", img: "img/Broccoli e Salsiccia.jpeg"},
    {nome: "Capricciosa", descrizione: "Una combinazione di sapori unica e irresistibile.", img: "img/Capricciosa.jpeg"},
    {nome: "Carbonara", descrizione: "Perfetto per chi ama i piatti leggeri e gustosi.", img: "img/Carbonara.jpeg"},
    {nome: "Diavola", descrizione: "Delizioso piatto con ingredienti freschi e genuini.", img: "img/Diavola.jpeg"},
    {nome: "Focaccia", descrizione: "Una combinazione di sapori unica e irresistibile.", img: "img/Focaccia.jpeg"},
    {nome: "Margherita", descrizione: "Delizioso piatto con ingredienti freschi e genuini.", img: "img/Margherita.jpeg"},
    {nome: "Patate", descrizione: "Una combinazione di sapori unica e irresistibile.", img: "img/Patate.jpeg"},
    {nome: "Rossa", descrizione: "Perfetto per chi ama i piatti leggeri e gustosi.", img: "img/Rossa.jpeg"},
    {nome: "Speck Tartufata", descrizione: "Una combinazione di sapori unica e irresistibile.", img: "img/Speck Tartufata.jpeg"}
];


async function showPiatti(){
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = "";
    piatti.forEach(piatto => {
        const item = document.createElement('div');
        item.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = piatto.img;
        img.alt = piatto.nome;

        const titolo = document.createElement('h3');
        titolo.textContent = piatto.nome;

        const desc = document.createElement('p');
        desc.textContent = piatto.descrizione;

        item.appendChild(img);
        item.appendChild(titolo);
        item.appendChild(desc);

        menuGrid.appendChild(item);
    });
}

async function showHome(){
const homeGrid = document.getElementById('home-grid');
homeGrid.innerHTML = "";
const homeImg = [
    {img: "img/home1.jpg"},
    {img: "img/home2.jpg"},
    {img: "img/home3.jpg"},
    {img: "img/home4.jpg"},
    {img: "img/home5.jpg"},
    {img: "img/home6.jpg"},
    {img: "img/home7.jpg"},
    {img: "img/home8.jpg"},
    {img: "img/home9.jpg"},
    {img: "img/home10.jpg"},
    {img: "img/home11.jpg"},
    {img: "img/home12.jpg"}
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


