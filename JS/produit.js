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
        let teddyInCart = {
            name: teddy.name,
            // parseInt pour convertir la chaine de caractère quantityInput en entier.
            quantity: parseInt(document.getElementById('quantityInput').value),
            price: teddy.price, 
            // On ajoute le ID chaque element à un id propre à lui
            _id: teddy._id
        }
        addToCart(teddyInCart);
        cartNumber();
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

// Fct qui affiche le teddy
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
    if (basket == null){
        // Basket = tableau de teddy donc basket est un tableau mnt
        basket = [teddy];
        localStorage.setItem('basket',JSON.stringify(basket));
    } 

   else {
        // S'il n'est pas vide
  
        //  Récupérer les informations du panier     
        basket = JSON.parse(basket);
        // si dans le panier il n'y a pas le même teddy que je veux ajouter = false
        let isInBasket =  false; 
        // Faire une boucle pour parcourir le tableau, si teddy qu'on veut ajouter à le meme meme id que celui du panier, on ajoute que la quantité 
        for (let i = 0; i < basket.length; i++){
            // teddy est un objet donc pour parcourir un objet on utilise le point
            // Basket est un tableau donc c'est pour ca qu'on va mettre des crochet
            if (teddy._id == basket[i]._id){
                basket[i].quantity += teddy.quantity;
                // si dans mon panier il y a déjà le teddy que je veux ajouter, alors true
                isInBasket = true;
            }

        }
        // Si le teddy n'est pas dans le panier, alors on ajoute le teddy dans le basket. (!isInBasket)= not isInBasket
        if (!isInBasket) basket.push(teddy);
        //  passer le tableau en JSON et le mettre dans le localStorage  
        localStorage.setItem('basket',JSON.stringify(basket));
      }
     
 
}


