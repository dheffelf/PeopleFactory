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

function renderListItem(lable, value){
    const item = document.createElement('li')
    item.textContent = `&{label}: ${value}`
    return item 
}

function renderList(personData){
    const list = document.createElement('ul')
    //array of name, favorite color and age 
    Object.keys(personData).map(function(label){
        const item = renderListItem(label, personData[label])
        list.appendChild
        
    })
    //call renderlistitem several times 
    return list
}


function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')
    const name = f.personName.value
    const favoriteColor = f.favoriteColor.value
    const age = f.age.value 

    const person = {
        name: f.personName.valu , 
        favoriteColor: f.favoriteColor.value,
        age: f.age.value , 

    }




    const list = document.createElement('ul')

    const list = renderList(person)
    details 



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
