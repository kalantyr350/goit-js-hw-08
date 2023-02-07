import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const inputValue = { email: '', message: '' };
console.log(messageInput.textContent);
formRef.addEventListener('submit', submitForm);
formRef.addEventListener('input', throttle(addLocalStorage, 500));

function addLocalStorage(e) {
  switch (e.target.name) {
    case 'email':
      inputValue.email = e.target.value;
      break;
    case 'message':
      inputValue.message = e.target.value;
      break;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(inputValue));
}

const dataObject = localStorage.getItem('feedback-form-state');

function insetWithLS(object) {
  if (object && emailInput.name === 'email') {
    inputValue.email = JSON.parse(object).email;
    emailInput.value = JSON.parse(object).email;
  }
  if (object && messageInput.name === 'message') {
    inputValue.message = JSON.parse(object).message;
    messageInput.textContent = JSON.parse(object).message;
  }
  console.log(inputValue);
}
insetWithLS(dataObject);

function submitForm(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(inputValue);
  inputValue.email = '';
  inputValue.message = '';
  formRef.elements.email.value = '';
  formRef.elements.message.value = '';
}
