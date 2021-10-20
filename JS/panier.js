// Afficher les élements présents dans le panier sous forme de tableau

// Depuis la page Panier, récupérer le panier (l’array) via localStorage.

function main() {
    getBasket();
    displayBasket();
    console.log(basket,'log1')
  }

main();

// Attention, ici teddy n'existe pas

function displayBasket(){
    let basket = localStorage.getItem('basket');
    let divBasket = document.getElementById('table');
    divBasket.innerHTML += `
    <thead>
    <tr>
      <th>Article</th>
      <th>Prix</th>
      <th>Quantité</th>
    </tr>
    </thead>
    
    <tbody id="cart-tablebody">

      <td> <img class="card-img-top border rounded" src="${teddy[i].imageUrl}" alt="Peluche fait main 1" height="251px">
      <p class="card-text"> ${teddy[i].name}></p> </td>
      <td class="card-text">${teddy[i].price /100}€</td>
    </tbody>`
    console.log(basket,'log3')
}
