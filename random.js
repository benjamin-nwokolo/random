const result = document.querySelector('#result');
const userInput = document.querySelector('.filter');

//An Empty array to iniatilze the data When Fetch
const listItems =[]
getData();

// Fetching From the Api
async function  getData (){
    const res = await fetch('https://randomuser.me/api?results=50')
    const {results}= await  res.json();

  // Clearing Result

result.innerHTML =''

results.forEach(user => {
     //creating Element
     const li = document.createElement('li');
      listItems.push(li)

      li.innerHTML =`
        <img src="${user.picture.large}" alt="${user.name.first}" >
        <div class ="user-info">
         <h4>${user.name.first}${user.name.last}</h4>
         <p>${user.location.city} , ${user.location.country}</p>
        </div>
      `
      result.appendChild(li)

});
}

//filtering the user input

userInput.addEventListener('keyup', (e) =>{
 const userValue = e.target.value.toLowerCase();
 listItems.forEach((item)=>{
    if(item.innerText.toLowerCase().indexOf(userValue) !== -1){
      item.classList.remove('hide');
    }
    else{
      item.classList.add('hide');
    }
 })

});