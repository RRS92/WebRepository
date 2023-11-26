let cartItems = [];
let total = 0;

function addItem(itemName, price) {
  const existingItem = cartItems.find(item => item.itemName === itemName);

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cartItems.push({ itemName, price, quantity: 1 });
  }

  updateCart();
}

function removeItem(itemName) {
  cartItems = cartItems.filter(item => item.itemName !== itemName);
  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  cartContainer.innerHTML = '';
  total = 0;

  cartItems.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <p>${item.itemName} - R$${item.price.toFixed(2)} x ${item.quantity}</p>
      <button onclick="removeItem('${item.itemName}')">Remover</button>
    `;
    cartContainer.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  totalElement.innerText = total.toFixed(2);
}
