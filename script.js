const addToCartBtn = document.getElementById('addToCart');
const quantityInput = document.getElementById('quantity');
const cartMessage = document.getElementById('cartMessage');

addToCartBtn.addEventListener('click', () => {
  const quantity = parseInt(quantityInput.value);
  if(quantity > 0) {
    cartMessage.textContent = `✅ ${quantity} Espresso Blend bag(s) added to cart!`;
    cartMessage.style.color = 'green';
  } else {
    cartMessage.textContent = 'Please select a valid quantity.';
    cartMessage.style.color = 'red';
  }
});
