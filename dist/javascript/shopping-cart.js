

'use strict'

let cart = [];
const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="add__to__cart"]');
addToCartButtonsDOM.forEach((addToCartButtonDOM)=>{
    addToCartButtonDOM.addEventListener('click', ()=>{
       const productsDOM = addToCartButtonDOM.parentElement;
       const products = {
           img: productsDOM.querySelector('#product__img').getAttribute('src'),
           name: productsDOM.querySelector('.product-name').innerText,
           price: productsDOM.querySelector('.product-price').innerText,
       }

       //Checking if the product allready exist in the cart
       const isInCart = (cart.filter(cartItem=> (cartItem.name === products.name)).length > 0);
       if (isInCart === false) {
        cartDOM.insertAdjacentHTML('beforeend', `
        <div class="cart__item">
        <img class="cart__item__img" src="${products.img}">
        <div class="cart__item__price--img">
        <h6 class="cart__item__name">${products.name}</h6>
        <h6 class="cart__item__price">${products.price}</h6>
        </div>
        <button class="remove__btn" data-action="remove__item">&times;</button>
        </div>
        `)
        addToCartButtonDOM.textContent = 'In Cart';
        showCart();
        cart.push(products);
        const count = cart.length;
        document.querySelector('.item__counter').innerHTML = `${count} items`;

       //Function to remove an item friom the cart
       const cartItemsDOM = cartDOM.querySelectorAll('.cart__item');
       cartItemsDOM.forEach(cartItemDOM=>{
           if (cartItemDOM.querySelector('.cart__item__name').innerText === products.name) {
            cartItemDOM.querySelector('[data-action="remove__item"]').addEventListener('click', (e)=>{
             e.target.parentElement.remove();
            });
           }
       }) 


       }else{
        addToCartButtonDOM.textContent = 'Item in cart';
       }
    })
})







//FUNCTION TO SHOW CART
function showCart(){
    cartDOM.style.display = 'block';
}




