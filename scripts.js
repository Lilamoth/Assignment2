function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    alert("Login successful!");
    window.location.href = 'LandingPage.html';
    return true;
}

function validateSignUpForm() {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const emailPattern = /^[^\s@]+@gmail\.com$/;
  const phonePattern = /^\d{10}$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid Gmail address.");
    return false;
  }
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  alert("Sign up successful!");
  window.location.href = 'LandingPage.html';
  return true;
}

function validateForgotPasswordForm() {
    let email = document.getElementById("email").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    alert("Password reset link sent!");
    return true;
}

function validateLibrarianForm() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const username = document.getElementById('username').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zip = document.getElementById('zip').value;
  const query = document.getElementById('query').value;

  if (!firstName || !lastName || !username || !city || !state || !zip || !query) {
    alert('Please fill in all fields.');
    return false;
  }

  // Additional validation can be added here

  document.getElementById('successMessage').style.display = 'block';
  return false; // Prevent form submission for demonstration purposes
}

// ...existing code...

const books = [
  {
    title: "To all the boys I've Loved Before",
    author: "Mark Manson",
    rating: 4,
    image: "./images/book-1.jpg",
    description: `To All the Boys I’ve Loved Before is a young adult novel telling the
                  story of Lara Jean Covey, a Korean-American teenager, whose social
                  life becomes fraught with complication and deceit after love letters
                  she never intended for anyone else to read are mysteriously mailed
                  to all of her crushes.`,
    genres: "Fiction, School, Historical, Romance, Literature"
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    rating: 5,
    image: "./images/book2.png",
    description: `In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be "positive" all the time so that we can truly become better, happier people.`,
    genres: "Self-help, Non-fiction, Psychology"
  },
  {
    title: "1984",
    author: "George Orwell",
    rating: 5,
    image: "./images/book3.png",
    description: `1984 is a dystopian social science fiction novel and cautionary tale, warning of the dangers of totalitarianism and extreme political ideology.`,
    genres: "Fiction, Dystopian, Political Fiction, Science Fiction"
  }
];

let currentBookIndex = 0;

function displayBook(index) {
  const book = books[index];
  document.querySelector('.book-title').textContent = book.title;
  document.querySelector('.book-author').textContent = book.author;
  document.querySelector('.rating').innerHTML = Array(5).fill(0).map((_, i) => 
    i < book.rating ? '<i class="fas fa-star text-warning"></i>' : '<i class="far fa-star text-warning"></i>'
  ).join('');
  document.querySelector('.book-desc').innerHTML = `<p>${book.description}</p>`;
  document.querySelector('.genre').textContent = `Genres: ${book.genres}`;
  document.querySelector('.image-button img').src = book.image;
}

document.getElementById('prev-btn').addEventListener('click', () => {
  currentBookIndex = (currentBookIndex - 1 + books.length) % books.length;
  displayBook(currentBookIndex);
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentBookIndex = (currentBookIndex + 1) % books.length;
  displayBook(currentBookIndex);
});

// Initial display
displayBook(currentBookIndex);

// ...existing code...

document.addEventListener('DOMContentLoaded', () => {
  const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
  const now = new Date();
  const updatedReservations = reservations.filter(reservation => new Date(reservation.expirationDate) > now);
  localStorage.setItem('reservations', JSON.stringify(updatedReservations));
});

// ...existing code...
