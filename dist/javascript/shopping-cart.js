

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
        <p class="delete__item">&times;</p>
        </div>
        `)
        addToCartButtonDOM.textContent = 'In Cart';
        showCart();
        cart.push(products);
        const count = cart.length;
        document.querySelector('.item__counter').innerHTML = `${count} items`;
       }else{
        addToCartButtonDOM.textContent = 'Item in cart';
       }
    })
})

//FUNCTION TO SHOW CART
function showCart(){
    cartDOM.style.display = 'block';
}





cart.forEach(cartItem=>{
    cartItem.addEventListener('click', (event)=>{
       console.log(event.target)
       event.preventDefault();
    })
})
//Function to remove a product with the X icon on the frontend
// function removeProduct(event){
//     if (event.target.classList.contains('delete__item')) {
//         console.log(event.target)
//     }
//     event.preventDefault();
// }
