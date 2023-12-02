let cartItems = [];
let total = 0;

// Recupera os itens do carrinho armazenados no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  if (storedCartItems) {
    cartItems = storedCartItems;
    updateCart();
  }
});

function addItem(itemName, price) {
  const existingItem = cartItems.find(item => item.itemName === itemName);

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1);
  } else {
    cartItems.push({ itemName, price, quantity: 1 });
  }

  // Atualiza os itens do carrinho e armazena no localStorage
  updateCart();
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function removeItem(itemName) {
  cartItems = cartItems.filter(item => item.itemName !== itemName);

  // Atualiza os itens do carrinho e armazena no localStorage
  updateCart();
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
      <p>${item.itemName} - $${item.price.toFixed(2)} </p>
      <button onclick="removeItem('${item.itemName}')">Remover</button>
    `;
    cartContainer.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  totalElement.innerText = total.toFixed(2);
}
