// cart.js

function addToCart(name, price, image) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p class="price">₹${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(card);
  });
}

function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // remove item at index
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload(); // refresh the page to update
}
