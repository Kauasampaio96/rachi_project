const mobilenav = document.getElementById('mobilenav')

const html = document.querySelector('html')
const checkbox = document.getElementById('switch-button')

const logo = document.getElementById('img-header')

function darkLight(){

  html.classList.toggle('dark-mode')

}


function abrirMenu(){
  mobilenav.style.opacity = '1'
  mobilenav.style.zIndex = '10'
}

function fecharMenu(){
  mobilenav.style.opacity = '0'
  mobilenav.style.zIndex = '-1'
}