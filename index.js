const personForm = document.querySelector('#personForm')

const last = document.querySelector('#last')

function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')
    const name = f.person.value

    details.innerHTML += name 

    
}

personForm.addEventListener('submit', handleSubmit)
last.addEventListener('submit', handleSubmit)