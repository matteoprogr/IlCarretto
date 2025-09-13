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
}

// Aggiungi l'evento click a tutti i link della navbar
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impedisce il comportamento di default (scroll)
        const targetSection = link.getAttribute('href').substring(1); // prende l'id senza #
        showSection(targetSection);
    });
});

// Mostra di default la sezione "home"
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
    {nome: "Speck tartufata", descrizione: "Una combinazione di sapori unica e irresistibile.", img: "img/Speck tartufata.jpeg"}
];

// Seleziona il container
const menuGrid = document.getElementById('menu-grid');

// Genera dinamicamente i div dei piatti
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
