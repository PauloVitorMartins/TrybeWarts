const enviar = document.querySelector('#logBut');
enviar.addEventListener('click', () => {
  const login = document.getElementById('email');
  const senha = document.getElementById('senha');
  const valorLogin = login.value;
  const valorSenha = senha.value;
  if (valorLogin === 'tryber@teste.com' && valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
const aceitaTermo = document.getElementById('agreement');
const botaoEnviar = document.getElementById('submit-btn');
aceitaTermo.addEventListener('click', () => {
  if (aceitaTermo.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
});
const textarea = document.getElementById('textarea');
const caracteresRestantes = document.getElementById('counter');
textarea.oninput = function num() {
  caracteresRestantes.innerHTML = (500 - this.value.length);
};
const criaPerfil = () => {
  const button = document.getElementById('submit-btn');
  const formulario = document.getElementById('evaluation-form');
  const main = document.getElementById('main')
  button.addEventListener('click', (event) => {
      event.preventDefault();
      formulario.style.display = 'none';
      const criaSection = document.createElement('section');
      criaSection.classList.add('forms');
      criaSection.id = 'form-data';
      main.appendChild(criaSection);
      const criaParagraphName = document.createElement('p');
      criaParagraphName.classList.add('namee');
      const criaParagraphEmail = document.createElement('p');
      criaParagraphEmail.classList.add('emaill')
      const section = document.getElementById('form-data');
      const criaParagraphHouse = document.createElement('p');
      criaParagraphHouse.classList.add('housee');
      const criaParagraphMaterias = document.createElement('p');
      criaParagraphMaterias.classList.add('materiass');
      const criaPargraphFamilia = document.createElement('p');
      criaPargraphFamilia.classList.add('familiass');
      const criaParagraphAvaliacao = document.createElement('p');
      criaParagraphAvaliacao.classList.add('avaliacaoo');
      const criaParagraphObservacao = document.createElement('p');
      criaParagraphObservacao.classList.add('observacaoo');
      section.appendChild(criaParagraphName);
      section.appendChild(criaParagraphEmail);
      section.appendChild(criaParagraphHouse);
      section.appendChild(criaPargraphFamilia);
      section.appendChild(criaParagraphMaterias);
      section.appendChild(criaParagraphAvaliacao);
      section.appendChild(criaParagraphObservacao);
      const nomeInserido = document.getElementById('input-name').value;
      const LastNameInserido = document.getElementById('input-lastname').value;
      const observacaoInserida = document.getElementById('textarea').value;
      const emailInserido = document.getElementById('input-email').value;
      const casaEscolhida = document.getElementById('house').value;
      criaParagraphName.innerText = 'Nome:' + ' ' + nomeInserido + ' ' + LastNameInserido;
      criaParagraphEmail.innerText = 'Email:' + ' ' + emailInserido;
      criaParagraphHouse.innerText = 'Casa:' + ' ' + casaEscolhida;
      criaParagraphMaterias.innerText = 'Matérias:' + ' ';
      const pegaRadio = () => { 
        const familiaEscolhida = document.getElementsByName('family');
        for(indexFamili in familiaEscolhida){
          if(familiaEscolhida[indexFamili].checked){
            criaPargraphFamilia.innerText = 'Família:' + ' ' + familiaEscolhida[indexFamili].value;
          }
        }
      }
      pegaRadio();
      const pegaMateria = () => {
         const materiasEscolhidas = document.querySelectorAll('.subject'); 
         for(i in materiasEscolhidas){
          if(materiasEscolhidas[i].checked){
              criaParagraphMaterias.innerText = `${materiasEscolhidas[i].value}, `
          }
         }
      }
      pegaMateria();
      const pegaAvaliacao = () => {
        const avaliacaoRad = document.getElementsByName('rate');
        for(i in avaliacaoRad){
          if(avaliacaoRad[i].checked){
            criaParagraphAvaliacao.innerText = 'Avaliação:' + ' ' + avaliacaoRad[i].value;
          }
        }
      }
      pegaAvaliacao();
      criaParagraphAvaliacao.innerText = 'Observações:' + ' ' + observacaoInserida;
  })
}
criaPerfil();