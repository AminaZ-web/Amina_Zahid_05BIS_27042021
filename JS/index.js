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
        <a href="/frontend/fiche_produit.html">
          <img class="card-img-top border rounded" src="../images/teddy_1.jpg" alt="Peluche fait main 1" height="251px">
        </a>
        <div class="card-body">
          <p class="card-text">Nom</p>
          <p class="card-text">Description</p>
          <p class="card-text">Prix</p>
        </div>
      </div>
    </div>`;

    }

}

 async function main(){
    const teddies = await getTeddies();
    let waiting ;
    clearInterval(waiting);
    waiting = setInterval (function(){
        if (teddies != undefined){
            displayTeddies(teddies);
        } 
    }, 20 )
 //   displayTeddies(teddies)

}


main();




