// Ajout de produit dans le panier et utilisation de localStorage

function getTeddy(idTeddy){
    let teddiesFromLocalStorage = localStorage.getItem("teddies");
    teddiesFromLocalStorage = JSON.parse(teddiesFromLocalStorage);
    for (let i = 0; i < teddiesFromLocalStorage.length; i++){
        if (idTeddy == teddiesFromLocalStorage[i]._id){
            return teddiesFromLocalStorage[i]
        }
    }

    return null
}

function main() {
  let idTeddy = getParam(window.location.href);
  const teddy = getTeddy(idTeddy);
  displayTeddy(teddy);
  document.getElementById('addToCart').addEventListener('click',() => {
      let teddyInCart = {
          name: teddy.name,
          quantity: document.getElementById('quantityInput').value
          //mettre le prix 
      }
      addToCart(teddyInCart);
  });
}

function getParam(str){
    var url = new URL(str);
    return url.searchParams.get("id");
    //console.log(name);
}


function displayTeddy(teddy) {
    let divTeddy = document.getElementById('teddy');
    divTeddy.innerHTML = 
    `
    <div class="row m-2 m-lg-5">
    <div class="card shadow-sm rounded-circle">
        <img class="card-img-top rounded-circle" src="${teddy.imageUrl}" alt="Peluche fait main 1" width="100%">
    </div>
  </div>
  <div class="col m-md-5 m-2 p-0">
    <p class="card-text">${teddy.name}</p>
    <p class="card-text">${teddy.description}</p>
    <p class="card-text">${teddy.price}</p>
  </div>`;
}

function addToCart(teddy){
    let basket = localStorage.getItem('basket');
    if (basket == null){
        basket = teddy;
        localStorage.setItem('basket',JSON.stringify(basket));
    }

}


window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
    main();
  });
    
