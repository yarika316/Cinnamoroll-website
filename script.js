
// Alert when "Learn More" or "Shop Now" buttons are clicked
document.getElementById('learn-more').addEventListener('click', () => {
  alert("Welcome to Cinnamoroll's magical world!");
});

document.getElementById('shop-now').addEventListener('click', () => {
  alert("Redirecting you to the shop...");
});

// Birthday Section Logic
document.getElementById('check-birthday').addEventListener('click', () => {
  const userBirthday = document.getElementById('user-birthday').value;
  const birthdayMessage = document.getElementById('birthday-message');

  // Check if the user entered a date
  if (!userBirthday) {
    birthdayMessage.textContent = "Please enter your birthday!";
    return;
  }

  // Parse the user's birthday and compare it to Cinnamoroll's birthday (March 6th)
  const userDate = new Date(userBirthday);
  const cinnamorollBirthday = new Date(userDate.getFullYear(), 2, 6); // March 6th

  if (
    userDate.getMonth() === cinnamorollBirthday.getMonth() &&
    userDate.getDate() === cinnamorollBirthday.getDate()
  ) {
    birthdayMessage.textContent = "🎉 Yay! You share a birthday with Cinnamoroll! 🎂";
  } else {
    birthdayMessage.textContent = "Aw, your birthday isn't on March 6th. But we can still celebrate together! 🎉";
  }
});

// Product Filtering
document.querySelectorAll('.category-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    // Add active class to the clicked button
    button.classList.add('active');

    const category = button.dataset.category;
    document.querySelectorAll('.product').forEach(product => {
      if (category === 'all' || product.dataset.category === category) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});

// Shopping Cart
let cart = [];
let total = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const name = product.querySelector('h3').textContent;
    const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));

    // Add item to cart
    cart.push({ name, price });
    total += price;

    // Update cart display
    updateCart();
  });
});

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Clear current cart items
  cartItems.innerHTML = '';

  // Display cart items
  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(itemDiv);
  });

  // Update total
  cartTotal.textContent = total.toFixed(2);
}

// Checkout Button
document.getElementById('checkout').addEventListener('click', () => {
  alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
  cart = [];
  total = 0;
  updateCart();
});

