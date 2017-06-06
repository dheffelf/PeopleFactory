const personForm = document.querySelector('#personForm')

function renderColor(color){
    const div = document.createElement('div')
    div.style.backgroundColor = color 
    div.style.width = '100px'
    div.style.height = '50px'
    return div 
    
    //`
   // <div style="background-color: ${favoriteColor}; width: 100px; height: 50px;"></div>
   //  `

}

function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')
    const name = f.personName.value
    const favoriteColor = f.favoriteColor.value
    const age = f.age.value 



    const list = document.createElement('ul')



    const colorItem = document.createElement('li')
    //outerHTML is within brackets 
    colorItem.innerHTML = `Favorite Color: ${renderColor(favoriteColor).outerHTML}`

    //get empty element 
    //boldedName.textContent = name 
    //puts name in it 
    //details.appendChild(boldedName)
    //puts into details, actualy object 

   details.innerHTML = `
    <ul>
        <li>Name: ${name}</li>
        <li>Favorite color: ${favoriteColor}</li>
        <li>age: ${age}</li>
   
    </ul>
   `
    
}

personForm.addEventListener('submit', handleSubmit)
