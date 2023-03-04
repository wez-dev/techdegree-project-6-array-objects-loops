const main = document.querySelector('main');

let directory = "";

for (let i = 0; i < pets.length; i++) {
  
  directory += `<h2>${pets[i].name}</h2>
                <h3>${pets[i].type}</h3>
                <img src="${pets[i].photo}" alt="${pets[i].breed}">
                `;
}

//document.querySelector('main').innerHTML = directory;
//document.querySelector('main').insertAdjacentHTML('beforeend', directory);
main.insertAdjacentHTML('beforeend', directory);