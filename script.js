const form = document.getElementById('signForm');
const nameInput = document.getElementById('teacherName');
const list = document.getElementById('signedList');

let signedTeachers = JSON.parse(localStorage.getItem('signedTeachers')) || [];

function updateList() {
  list.innerHTML = '';
  signedTeachers.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = nameInput.value.trim();

  if (name === '') return;

  if (signedTeachers.includes(name)) {
    alert('This teacher already signed.');
  } else {
    signedTeachers.push(name);
    localStorage.setItem('signedTeachers', JSON.stringify(signedTeachers));
    updateList();
  }

  nameInput.value = '';
});

updateList();
