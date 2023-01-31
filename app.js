const biscoito = document.querySelector('.js-bicoito')
const msn = document.querySelector('.js-p')
const srcBiscoito = biscoito.getAttribute('src')
const app = document.querySelector('.js-app')
const button = '<button class="btn">Abrir outro biscoito</button>'
const btn = document.querySelector('.btn')
const title = document.querySelector('.js-title')

let generateMsg = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
  'O bom-senso vale mais do que muito conhecimento.',
  'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
  'São os nossos amigos que nos ensinam as mais valiosas lições.',
  'Aquele que se importa com o sentimento dos outros, não é um tolo.',
  'A adversidade é um espelho que reflete o verdadeiro eu.',
  'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
  'Uma bela flor é incompleta sem as suas folhas.',
  'Sem o fogo do entusiasmo, não há o calor da vitória',
  'O riso é a menor distância entre duas pessoas.',
  'Os defeitos são mais fortes quando o amor é fraco.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Você sempre será a sua melhor companhia!',
  'Acredite em milagres, mas não dependa deles.',
  'Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.'
]

function handleBiscuit() {
  msn.innerHTML = generateMsg[Math.floor(Math.random() * generateMsg.length)]
}

biscoito.addEventListener('click', function () {
  if (biscoito.getAttribute('src') == './styles/_Group_.jpg') {
    biscoito.classList.add('active')

    setTimeout(() => {
      biscoito.classList.remove('active')
      app.classList.add('active')
    }, 1500)

    setTimeout(() => {
      title.innerHTML = 'Aqui está a sua sorte de <br> hoje:'
      biscoito.setAttribute('src', './styles/opened-cookie.jpg')
      handleBiscuit()
      msn.classList.toggle('active')
      btn.classList.remove('btnHiden')
    }, 2000)
  }
})

btn.addEventListener('click', () => {
  biscoito.setAttribute('src', './styles/_Group_.jpg')
  msn.innerHTML = 'Abra o biscoito e descubra!'
  msn.classList.remove('active')
  btn.classList.add('btnHiden')
  app.classList.remove('active')
  title.innerHTML = 'Qual é sua sorte de <br/> hoje?'
})

if (biscoito.getAttribute('src') == './styles/_Group_.jpg') {
}
