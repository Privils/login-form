const form = document.querySelector('.signup-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const userData = {
    username: document.querySelector('#username').value.trim(),
    name: document.querySelector('#name').value.trim(),
    surname: document.querySelector('#surname').value.trim(),
    email: document.querySelector('#email').value.trim(),
    password: document.querySelector('#password').value.trim(),
  };

  // Validation field
  const isEmpty = Object.values(userData).some(value => value === '');
  if (isEmpty) {
    alert("Please fill in all the fields.");
    return;
  }

  //for  Storing data in localStorage
  localStorage.setItem('userData', JSON.stringify(userData));

  alert("Thank You For Your Participation");

  //for clearing form
  form.reset();
});

const savedData = JSON.parse(localStorage.getItem('userData'));
console.log(savedData);
