const scriptURL = 'https://script.google.com/macros/s/AKfycbxtymuvCA4GM3LLpe_7n30G_ZkcIJ8R1EaZx9At3prDP0P-dzaQeDsLTGKrVdEwruTz/exec';
const form = document.forms['submit-to-google-sheet'];
const message = document.getElementById("randomMessage");

form.addEventListener('submit', e => {
  e.preventDefault();
  const firstName = form.elements["firstname"].value;
  const lastName = form.elements["lastname"].value;
  const age = form.elements["age"].value;
  const email = form.elements["email"].value;

  if (firstName !== "" || lastName !== "" || age !== "" || email !== "") {
    message.style.display = 'block';
  }

  // continue with your form submission logic here
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});


function display() {
  // No preventDefault here
  const firstName = form.elements["firstname"].value;
  const lastName = form.elements["lastname"].value;
  const age = form.elements["age"].value;
  const email = form.elements["email"].value;

  if (firstName !== "" || lastName !== "" || age !== "" || email !== "") {
    // If any of the fields are not empty, display the message
    message.style.display = 'block';
  }
}
