// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

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

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
