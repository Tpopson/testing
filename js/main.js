let container = document.getElementById('btn')
let container1 = document.getElementsByClassName('btn')
let container2 = document.querySelector('#pick')
let container3 = document.querySelector('.hold')
let container4 = document.querySelector('button')
let show = document.querySelector('.show')


container2.style.color = 'pink'
container2.style.background= 'black'
show.innerHTML = 'Working with Javascript'
show.style.color = 'teal'
// show.classList.add('new')
// show.classList.remove('show')
// show.classList.replace('show','tech')
show.classList.toggle('flip')