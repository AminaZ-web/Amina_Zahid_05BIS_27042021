async function getTeddies(){
    return fetch("http://localhost:3000/api/teddies")
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (value) {
        console.table(value);
        displayTeddies(value);
        saveInLocalStorage(value);
    })
    .catch(function (err) {
        // Une erreur est survenue
    });
}

function displayTeddies (response){
    let divTeddies = document.getElementById("teddies");
    for(let i = 0; i < response.length; i++){
        divTeddies.innerHTML += `
        <div class="col py-3">
        <div class="card shadow-sm">
        <a href="/frontend/fiche_produit.html?id=${response[i]._id}">
          <img class="card-img-top border rounded" src="${response[i].imageUrl}" alt="Peluche fait main 1" height="251px">
        </a>
        <div class="card-body">
          <p class="card-text">${response[i].name}</p>
          <p class="card-text">${response[i].description}</p>
          <p class="card-text">${response[i].price /100}€</p>
        </div>
      </div>
    </div>`;

    }

}

function saveInLocalStorage(teddies){
    localStorage.setItem("teddies",JSON.stringify(teddies));

}


 async function main(){
    const teddies = await getTeddies();
    cartNumber();
    
}

function initBasket(){
    localStorage.setItem('basket','');
}



main();





