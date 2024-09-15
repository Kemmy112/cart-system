
const addBtn = document.getElementsByClassName('add');
const makeCount = document.getElementById('count');
const totalSpan = document.getElementById('collate');
const placeOrderBtn = document.getElementById('send');
const itemsList = document.getElementsByClassName('cart-items')[0];
const delButton = document.getElementsByClassName('button-dell');


let weCount = 0;
let cartArray = [];


const displayCount = (weCount) => {
    makeCount.innerText = weCount;
}


function addToCart(product, price) {
    cartArray.push({ product, price });
    updateCart();
    weCount++;
    displayCount(weCount);
}


function updateCart() {
    itemsList.innerHTML = '';
    cartArray.forEach((item) => {
        const createElement = document.createElement('div');
        createElement.textContent = `${item.product} - ${item.price}`;
        itemsList.appendChild(createElement);
    });
    calcTotal();
}


function calcTotal() {
    let total = 0;
    cartArray.forEach((item) => {
    total += item.price;
    });
    totalSpan.textContent = ` ${total}`;
}


function placeOrder() {
    alert('Your order is on the way!');
    cartArray = [];
    weCount = 0;
    displayCount(weCount);
    updateCart();
}


Array.prototype.forEach.call(addBtn, (button) => {
    button.addEventListener('click', () => {
      const parentDiv = button.parentNode;
      const productName = parentDiv.querySelector('h4').textContent;
      const priceDiv = parentDiv.querySelector('.tag');
      const price = priceDiv.textContent;
      console.log('Price text content:', priceDiv.textContent);
      addToCart(productName, price);
    });


});
Array.prototype.forEach.call(delButton, (button) => {
    button.addEventListener('click', (e) => {
      const itemIndex = cartArray.findIndex((item) => item.product === e.target.parentNode.textContent.split(' - ')[0]);
      cartArray.splice(itemIndex, 1);
      if (weCount > 0){
      weCount--;
      }
      displayCount(weCount);
      updateCart();
    });
  });

// The event listener
placeOrderBtn.addEventListener('click', placeOrder);