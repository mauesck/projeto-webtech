// ----- construção menu
// div-logo-span
const divLogoSpan = document.getElementById('div-logo-span');

const spanMenu = document.createElement('span');
//spanMenu.classList = 'material-symbols-outlined';
spanMenu.classList = 'fa-solid fa-bars fa-2xs';
spanMenu.id = 'span-menu';
spanMenu.addEventListener('click', () => {
    abreFechaMenu();
})
//spanMenu.textContent = 'menu';
divLogoSpan.appendChild(spanMenu);

const logoMob = document.createElement('img');
logoMob.id = 'logo-mob';
logoMob.alt = 'logo';
logoMob.src = 'imgs/logo.png';
divLogoSpan.appendChild(logoMob);

// header
const header = document.querySelector('header');

const aLogo = document.createElement('a');
aLogo.href = 'index.html';

const headerLogo = document.createElement('img');
headerLogo.id = 'header-logo';
headerLogo.alt = 'logo';
headerLogo.src = 'imgs/logo.png';

aLogo.appendChild(headerLogo);
header.appendChild(aLogo);

// Criando o elemento <nav>
var nav = document.createElement("nav");

// Criando o elemento <div> com id "container-links"
var containerLinks = document.createElement("div");
containerLinks.setAttribute("id", "container-links");

// Criando os elementos <div> com id "div-link" e seus filhos
var divLink1 = document.createElement("div");
divLink1.setAttribute("id", "div-link");

var home = document.createElement("a");
home.setAttribute("href", "index.html");
home.textContent = "Home";
divLink1.appendChild(home);

var divLink2 = document.createElement("div");
divLink2.setAttribute("id", "div-link");

var sobre = document.createElement("a");
sobre.setAttribute("href", "index.html#missao");
sobre.textContent = "Sobre";

var submenuDiv2 = document.createElement("div");
submenuDiv2.setAttribute("id", "submenu");

var submenuOption21 = document.createElement("a");
submenuOption21.setAttribute("href", "index.html#missao");
submenuOption21.textContent = "Missão";

var submenuOption22 = document.createElement("a");
submenuOption22.setAttribute("href", "index.html#equipe-docente");
submenuOption22.textContent = "Equipe Docente";

var submenuOption23 = document.createElement("a");
submenuOption23.setAttribute("href", "index.html#depoimentos");
submenuOption23.textContent = "Depoimentos";

submenuDiv2.appendChild(submenuOption21);
submenuDiv2.appendChild(submenuOption22);
submenuDiv2.appendChild(submenuOption23);

divLink2.appendChild(sobre);
divLink2.appendChild(submenuDiv2);

var divLink3 = document.createElement("div");
divLink3.setAttribute("id", "div-link");

var servicos = document.createElement("a");
servicos.setAttribute("href", "cursos.html");
servicos.textContent = "Cursos";

var submenuDiv3 = document.createElement("div");
submenuDiv3.setAttribute("id", "submenu");

var submenuOption31 = document.createElement("a");
submenuOption31.setAttribute("href", "cursos.html#frontend");
submenuOption31.textContent = "Front-End";

var submenuOption32 = document.createElement("a");
submenuOption32.setAttribute("href", "cursos.html#nodejs");
submenuOption32.textContent = "Node.JS";

var submenuOption33 = document.createElement("a");
submenuOption33.setAttribute("href", "cursos.html#mysql");
submenuOption33.textContent = "MySQL";

submenuDiv3.appendChild(submenuOption31);
submenuDiv3.appendChild(submenuOption32);
submenuDiv3.appendChild(submenuOption33);

divLink3.appendChild(servicos);
divLink3.appendChild(submenuDiv3);

var divLink4 = document.createElement("div");
divLink4.setAttribute("id", "div-link");

var catalogo = document.createElement("a");
catalogo.setAttribute("href", "bolsas.html");
catalogo.textContent = "Bolsas";

/*var submenuDiv4 = document.createElement("div");
submenuDiv4.setAttribute("id", "submenu");

var submenuOption41 = document.createElement("a");
submenuOption41.setAttribute("href", "#");
submenuOption41.textContent = "Bolsa de Mérito";

var submenuOption42 = document.createElement("a");
submenuOption42.setAttribute("href", "#");
submenuOption42.textContent = "Bolsa de Necessidade Financeira";

var submenuOption43 = document.createElement("a");
submenuOption43.setAttribute("href", "#");
submenuOption43.textContent = "";

submenuDiv4.appendChild(submenuOption41);
submenuDiv4.appendChild(submenuOption42);
submenuDiv4.appendChild(submenuOption43);*/

divLink4.appendChild(catalogo);
//divLink4.appendChild(submenuDiv4);

var divLink5 = document.createElement("div");
divLink5.setAttribute("id", "div-link");

var contato = document.createElement("a");
contato.setAttribute("href", "#");
contato.textContent = "Contato";

var submenuDiv5 = document.createElement("div");
submenuDiv5.setAttribute("id", "submenu");

/*var submenuOption51 = document.createElement("a");
submenuOption51.setAttribute("href", "#");
submenuOption51.textContent = "WhatsApp";*/

var submenuOption52 = document.createElement("a");
submenuOption52.setAttribute("href", "#div-contato");
submenuOption52.textContent = "E-mail";

var submenuOption53 = document.createElement("a");
submenuOption53.setAttribute("href", "#titulo-localizacao");
submenuOption53.textContent = "Presencial";

//submenuDiv5.appendChild(submenuOption51);
submenuDiv5.appendChild(submenuOption52);
submenuDiv5.appendChild(submenuOption53);

divLink5.appendChild(contato);
divLink5.appendChild(submenuDiv5);

// Adicionando os elementos ao elemento <nav> e ao corpo do documento
containerLinks.appendChild(divLink1);
containerLinks.appendChild(divLink2);
containerLinks.appendChild(divLink3);
containerLinks.appendChild(divLink4);
containerLinks.appendChild(divLink5);
nav.appendChild(containerLinks);
header.appendChild(nav);

// ----- mudar menu quando scrollar
function backgroundMenuMob() {
    const sobra = document.getElementById('menu-dentro');
    const divLogoSpan = document.getElementById('div-logo-span');

    if (divLogoSpan.getBoundingClientRect().top > sobra.getBoundingClientRect().bottom) {
        divLogoSpan.style.backgroundColor = '#202020';
    } else {
        divLogoSpan.style.backgroundColor = '';
    }
}
function backgroundMenu() {
    const sobra = document.getElementById('menu-dentro');
    const header = document.querySelector('header');

    if (header.getBoundingClientRect().top > sobra.getBoundingClientRect().bottom) {
        header.style.backgroundColor = '#202020';
    } else {
        header.style.backgroundColor = '';
    }
}
if (window.innerWidth < 768) {
    window.addEventListener('scroll', backgroundMenuMob);
} else if (window.innerWidth > 768) {
    window.addEventListener('scroll', backgroundMenu);
}

// ----- abre e fecha o menu
let controle = false;
function abreFechaMenu() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const span = document.getElementById('span-menu');
    const divLogoSpan = document.getElementById('div-logo-span');
    const logoMob = document.getElementById('logo-mob');

    if (controle === false) {
        divLogoSpan.style.transition = 'background-color 0s ease-in-out';
        divLogoSpan.style.backgroundColor = '';
        logoMob.style.display = 'none';
        header.style.backgroundColor = '#202020';
        header.style.height = '100vh';
        header.style.width = '80%';
        nav.style.display = 'flex';
        //span.textContent = 'close';
        span.classList = 'fa-solid fa-close fa-2xs';
        span.style.transform = 'rotate(90deg)';

        controle = true;
    } else {
        divLogoSpan.style.transition = 'background-color 0.5s ease-in-out';
        divLogoSpan.style.backgroundColor = '#202020';
        logoMob.style.display = 'block';
        header.style.backgroundColor = '';
        header.style.height = '80px';
        header.style.width = '0px';
        nav.style.display = 'none';
        //span.textContent = 'menu';
        span.classList = 'fa-solid fa-bars fa-2xs';
        span.style.transform = 'rotate(0deg)';

        controle = false;
    }
}
