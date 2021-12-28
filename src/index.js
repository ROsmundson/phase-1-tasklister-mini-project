document.body.style.background = "lightblue"

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildMyToDos(e.target[0].value)
    form.reset()
   })
})   

function buildMyToDos(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent =  'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
   e.target.parentNode.remove()
 }
    
    // const li = document.createElement('li')
    // li.innerText = e.target[0].value
    // const ul = document.querySelector('#tasks')
    // ul.append(li)


/* Selecting DOM element */
//const button = document.querySelector("button");
 
/* Callback function */
//function alertButton() {
    //alert('Hi native JavaScript');
//}
 
/* Event listener */
//button.addEventListener("click", alertButton, false);