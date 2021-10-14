// Ajout de produit dans le panier et utilisation de localStorage
//-------------------------------------------------------------------

const teddy = getTeddy();

/* Fct main() qui affiche :
    * getParams qui récupère le paramètre d'un l'URL(id) 
    * getTeddy qui récupère toutes les infos d'1 seul teddy par l'id
    * displayTeddy qui affiche tte les info d'un teddy
    * addToCart qui crée et ajoute au panier (basket) en réaction à l'evt click
*/
function main() {
    let idTeddy = getParam(window.location.href);
    const teddy = getTeddy(idTeddy);
    displayTeddy(teddy);
    document.getElementById('addToCart').addEventListener('click',() => {
        let teddyInCart = [{
            name: teddy.name,
            quantity: document.getElementById('quantityInput').value,
            price: teddy.price
        }]
        addToCart(teddyInCart);
    });
  }
  
// Attend que tout le DOM se charge avant d'appeler la fct main ()
  window.addEventListener("DOMContentLoaded", (event) => {
      console.log("DOM entièrement chargé et analysé");
      main();
    });

// Fct de récupération des teddies from localStorage
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

// Fct qui récupère l'element (id) de l'URL
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
    <p class="card-text">${teddy.price /100}€</p>
  </div>`;
}

// Fct qui crée et ajoute au panier (basket)
function addToCart(teddy){
    let basket = localStorage.getItem('basket');
    //let oldBasket = localStorage.getItem('basket',JSON.parse(basket));
    if (basket == null){
        basket = teddy;
        localStorage.setItem('basket',JSON.stringify(basket));
    } 

   else if(basket != null) {
        // S'il n'est pas vide
  
        //  rajouter les informations de l'ancien panier au tableau teddy ? //  Récupérer les informations du teddy affiché et le mettre dans un tableau 
     
        for (let i = 0 ; basket = teddy ; i++){
         teddy.push(basket[i]);
        //  localStorage.setItem('basket',(basket));
        }
  
        //  passer le tableau en JSON et le mettre dans le localStorage   
        localStorage.setItem('basket',(basket));
      }
     
 
}