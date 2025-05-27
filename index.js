const username = document.querySelector('#username');
const name = document.querySelector('#name');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector(".btn");

const CheckValidation = () => {
  if (
    username.value.trim() === '' ||
    name.value.trim() === '' ||
    surname.value.trim() === '' ||
    email.value.trim() === '' ||
    password.value.trim() === ''
  ) {
    alert("Please fill in all the information.");
    return false;
  }
  return true;
};
const clearForm = () => {
  username.value = '';
  name.value = '';
  surname.value = '';
  email.value = '';
  password.value = '';
};
const handleSubmit = () => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form from submitting by default
    const isValid = CheckValidation();
    if (isValid) {
      alert("Thank You For Signing Up With Us");
      clearForm();
    }
  });
};

handleSubmit();
