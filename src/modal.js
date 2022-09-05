// Variable
const modalDiv = document.querySelector('.modal');
const overlayDiv = document.querySelector('#overlay');
const closeBtn = document.querySelector('.close-modal');
let titleDiv = modalDiv.querySelector('.title');
let bodyDiv = modalDiv.querySelector('.modal-body');

// Open close functions
export function openModal(title, body) {
  modalDiv.classList.add('active');
  overlayDiv.classList.add('active');

  titleDiv.textContent = title;
  if (body) bodyDiv.textContent = body;
}

export function closeModal() {
  titleDiv.textContent = '';
  bodyDiv.textContent = '';
  modalDiv.classList.remove('active');
  overlayDiv.classList.remove('active');
}

// Event Listeners
overlayDiv.addEventListener('click', closeModal());
closeBtn.addEventListener('click', closeModal());
