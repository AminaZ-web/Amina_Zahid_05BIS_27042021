// Afficher les élements présents dans le panier sous forme de tableau

// Depuis la page Panier, récupérer le panier (l’array) via localStorage.

function main() {

    displayBasket();
    document.getElementById('confirm-command').addEventListener('click', function(){
      let jsonBody = {
        email: document.getElementById('email').value
      }
        });

  //  getBasket();
   // cartNumber();
  }

main();

// Attention, ici teddy n'existe pas
 /*function getBasket(){
  let basket = localStorage.getItem('basket');
  basket = JSON.parse(basket);
}*/

function displayBasket(){
  let basket = localStorage.getItem('basket');
  basket = JSON.parse(basket);
  let teddy = localStorage.getItem('teddy');
  teddy = JSON.parse(teddy);
 
 

  // Faire une boucle pour parcourir le tableau, si teddy qu'on veut ajouter à le meme meme id que celui du panier, on ajoute que la quantité 
  let divBasket = document.getElementById('table');
  let sum = 0;

  for (let i = 0; i < basket.length; i++) {
    divBasket.innerHTML +=
    `
        <tr> 
          <td> 
          <p class="card-text">${basket[i].name}</p> </td> 
          <td class="card-text"> <p> ${basket[i].price /100}€</p> </td>
          <td class="card-text"><p>${basket[i].quantity}</p></td>
        </tr>
        `
    sum += basket[i].quantity * basket[i].price /100;

  }

  document.getElementById('total').innerHTML = sum ;
  // Si le teddy n'est pas dans le panier, alors on ajoute le teddy dans le basket. (!isInBasket)= not isInBasket

  
  
 
  
  //  passer le tableau en JSON et le mettre dans le localStorage  
 // localStorage.setItem('basket',JSON.stringify(basket));
}




// Vérification du form avant envoie 

// Envoie du form au backend 


fetch("http://localhost:3000/api/teddies/order", {
	method: 'POST',
	headers: { 
'Accept': 'application/json', 
'Content-Type': 'application/json' 
},
	body: JSON.stringify(jsonBody)
});