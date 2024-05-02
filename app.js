let button = document.querySelector('button')
let inputFeild = document.querySelector('input')
let listask = document.getElementById('elemt')
let form = document.querySelector('form')
// let span = document.querySelector('span')

form.lastElementChild.addEventListener('click', (e)=>{
    e.preventDefault()
    if(inputFeild.value !== ''){
        let div = document.createElement('div')
        div.classList.add('todo')
        let task = document.createElement('p')
        task.classList.add('task')
        task.innerText = inputFeild.value
        task.style.width = "95%"
        let buton = document.createElement('span')
        buton.innerHTML = "<i class='bx bx-trash'></i>"
        div.appendChild(task)
        div.appendChild(buton)
        listask.append(div)
        buton.addEventListener('click', (e)=>{
            div.style.display = 'none'
        })
    }
    inputFeild.value = ''
})