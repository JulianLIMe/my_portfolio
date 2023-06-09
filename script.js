let menuVisible = false;

const monstrarOcultarMenu = () => {
    if (menuVisible) {
        document.getElementById('nav').classList = ''
        menuVisible = false
    }else {
        document.getElementById('nav').classList = 'responsive'
        menuVisible = true
    }
}

const seleccionar = () => {
    document.getElementById('nav').classList = ''
    menuVisible = false
}


// Funcion que aplica la animacion de las skills
const efectoSkills = () => {
    var skills = document.getElementById('skills')
    //console.log(window.innerHeight) // Devuelve la altura de la ventana grafica en pixeles
    //console.log(skills.getBoundingClientRect()) // Devuelve un objeto con info sobre el tamaño y la posicion relativa a la ventana grafica de un elemento (en este caso skills) (top me dice la distancia desde la parte superiar de la ventana grafica hasta el elemento, es decir cuantos pixeles hay que scrollear desde el top hasta el elemnto)
    var distancia_topToSkills = window.innerHeight - skills.getBoundingClientRect().top
    if (distancia_topToSkills >= 400) {
        let skill = document.getElementsByClassName('progreso')
        //console.log(skill)
        skill[0].classList.add('htmlcss')
        skill[1].classList.add('javascriptnode')
        skill[2].classList.add('react')
        skill[3].classList.add('sql')
        skill[4].classList.add('mongodb')
        skill[5].classList.add('python')
        skill[6].classList.add('git')
        skill[7].classList.add('trabajoenequipo')
        skill[8].classList.add('comunicacion')
        skill[9].classList.add('empatia')
        skill[10].classList.add('responsabilidad')
    }
}


// Dectando el scrolling para aplicar animacion a barra de skills
window.onscroll = function() {
    efectoSkills()
}
