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

