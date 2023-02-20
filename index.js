const mobilenav = document.getElementById('mobilenav')


function abrirMenu(){
  mobilenav.style.opacity = '1'
  mobilenav.style.zIndex = '10'
}

function fecharMenu(){
  mobilenav.style.opacity = '0'
  mobilenav.style.zIndex = '-1'
}