// Ajout de produit dans le panier et utilisation de localStorage

let carts = document.querySelector('#addToCart')

let product = [
    {
        name: 'Nom',
        price: 40,
        inCart: 0

    },
]
for (let i = 0; i < carts, length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('cart').textContent = productNumbers;
    }
}
function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItems('cartNumbers', productNumbers + 1);
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart').textContent = 1;
    }


}

onLoadCartNumbers();