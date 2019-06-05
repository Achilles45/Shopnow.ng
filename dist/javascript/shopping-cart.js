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
      cartDOM.insertAdjacentHTML('beforeend', `
      <div class="cart__item">
      <img class="cart__item__img" src="${products.img}">
      <div class="cart__item__price--img">
      <h6 class="cart__item__name">${products.name}</h6>
      <h6 class="cart__item__price">${products.price}</h6>
      </div>
      <p class="delete__item">&times;</p>
      </div>
      `)
      addToCartButtonDOM.textContent = 'In Cart';
      showCart();
    })
})

//FUNCTION TO SHOW CART
function showCart(e){
    cartDOM.style.display = 'block';
    e.preventDefault();
}