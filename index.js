const mobilenav = document.getElementById('mobilenav')

const html = document.querySelector('html')
const checkbox = document.getElementById('switch-button')

const logo = document.getElementById('img-header')

const sc1hero = document.getElementById('sc1-hero')

function darkLight(){

  html.classList.toggle('dark-mode')

}


function abrirMenu(){
  mobilenav.style.opacity = '1'
  mobilenav.style.zIndex = '10'

  sc1hero.style.transition = '0.6s'
  sc1hero.style.zIndex = '0'
}

function fecharMenu(){
  mobilenav.style.opacity = '0'
  mobilenav.style.zIndex = '-1'
  sc1hero.style.zIndex = '2'
  sc1hero.style.transition = '0'
  
}