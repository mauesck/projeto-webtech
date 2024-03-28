var footer = document.querySelector('footer');

// Criar a estrutura
var divExterna = document.createElement('div');
var divSuperior = document.createElement('div');
var logo = document.createElement('img');
var divSeções = document.createElement('div');
var h2Seções = document.createElement('h2');
var ulSeções = document.createElement('ul');
var liFinanceiro = document.createElement('li');
var aFinanceiro = document.createElement('a');
var liBolsas = document.createElement('li');
var aBolsas = document.createElement('a');
var liPortal = document.createElement('li');
var aPortal = document.createElement('a');
var liContato = document.createElement('li');
var aContato = document.createElement('a');
var divLocalizacao = document.createElement('div');
var h2Localizacao = document.createElement('h2');
var iframeMapa = document.createElement('iframe');
var hr = document.createElement('hr');
var divContato = document.createElement('div');
var divInferior = document.createElement('div');
var pDireitosAutorais = document.createElement('p');
var pDesenvolvidoPor = document.createElement('p');

// Adicionar atributos e conteúdo aos elementos
logo.src = 'imgs/logo.png';
logo.alt = 'logo';

aFinanceiro.href = '#';
aFinanceiro.textContent = 'Financeiro';

aBolsas.href = '#';
aBolsas.textContent = 'Bolsas de estudo';

aPortal.href = '#';
aPortal.textContent = 'Portal do estudante';

aContato.href = '#';
aContato.textContent = 'Contato';

h2Seções.textContent = 'Seções';
h2Localizacao.textContent = 'Localização';
h2Localizacao.id = 'titulo-localizacao';

iframeMapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916260.2152960047!2d-49.39157358117677!3d-26.224592577704996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deaf52c93f75d9%3A0x28ae523a1a3be265!2sUniSENAI%20Campus%20Joinville!5e0!3m2!1spt-BR!2sbr!4v1711567374081!5m2!1spt-BR!2sbr';
iframeMapa.style.border = '0';
iframeMapa.allowfullscreen = '';
iframeMapa.loading = 'lazy';
iframeMapa.referrerpolicy = 'no-referrer-when-downgrade';

divContato.id = 'div-contato';

// Criar o formulário
var formulario = document.createElement('form');
var formTitulo = document.createElement('h2');
formTitulo.textContent = "Contato";
formulario.action = '#';
formulario.method = 'POST';
// Adicionar campos ao formulário
formulario.innerHTML += '<input type="text" id="nome" name="nome" placeholder="Nome" required>';
formulario.innerHTML += '<input type="email" id="email" name="email" placeholder="E-mail" required>';
formulario.innerHTML += '<input type="text" id="assunto" name="assunto" placeholder="Assunto">';
formulario.innerHTML += '<textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte mais aqui" required></textarea>';
formulario.innerHTML += '<button type="submit">Enviar</button>';
formulario.innerHTML += '<button type="reset">Limpar</button>';
divContato.appendChild(formTitulo);
divContato.appendChild(formulario);

pDireitosAutorais.innerHTML = '&copy; 2024 WebTech Academy - Todos os direitos reservados.';
pDesenvolvidoPor.textContent = 'Desenvolvido por Thiago Mauesck';

// Estruturação dos elementos
divSuperior.appendChild(logo);

liFinanceiro.appendChild(aFinanceiro);
liBolsas.appendChild(aBolsas);
liPortal.appendChild(aPortal);
liContato.appendChild(aContato);
ulSeções.appendChild(liFinanceiro);
ulSeções.appendChild(liBolsas);
ulSeções.appendChild(liPortal);
ulSeções.appendChild(liContato);
divSeções.appendChild(h2Seções);
divSeções.appendChild(ulSeções);

divLocalizacao.appendChild(h2Localizacao);
divLocalizacao.appendChild(iframeMapa);

divExterna.appendChild(divSuperior);
divExterna.appendChild(divSeções);
divExterna.appendChild(divLocalizacao);
divExterna.appendChild(divContato);

divInferior.appendChild(pDireitosAutorais);
divInferior.appendChild(pDesenvolvidoPor);

footer.appendChild(divExterna);
footer.appendChild(hr);
footer.appendChild(divInferior);