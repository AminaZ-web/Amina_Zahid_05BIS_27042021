// Afficher les élements présents dans le panier sous forme de tableau

// Depuis la page Panier, récupérer le panier (l’array) via localStorage.



function main() {
    const basket = getBasket();
    getBasket(basket);
    
  }

main();

function getBasket(basket){
    let basketFromLocalStorage = localStorage.getItem("basket");
    basketFromLocalStorage = JSON.parse(basketFromLocalStorage);
    for (let i = 0; i < basketFromLocalStorage.length; i++){
        if (basket == basketFromLocalStorage[i]){
            return basketFromLocalStorage[i]
        }
    }

    return null
}

function displayBasket(){
    let divBasket = document.getElementById('table');
    divBasket.innerHTML += `
        <div class="col py-3">
        <div class="card shadow-sm">
   
          <img class="card-img-top border rounded" src="${response[i].imageUrl}" alt="Peluche fait main 1" height="251px">
       
        <div class="card-body">
          <p class="card-text">${response[i].name}</p>
          <p class="card-text">${response[i].description}</p>
          <p class="card-text">${response[i].price /100}€</p>
        </div>
      </div>
    </div>`
}