const savedName = localStorage.getItem('username');
const nameInputModal = document.getElementById('name-input-modal');
const welcomeModal = document.getElementById('welcome-modal');
const modalInput = document.querySelector(`.modal-content`);

if (savedName) {
    showWelcomeModal(savedName);
} else {
    showNameInputModal();
}

function showNameInputModal() {
nameInputModal.style.display = 'block';
document.body.classList.add('modal-open');
}

modalInput.addEventListener(`click`, ({ target }) => {
    if(target.tagName === `BUTTON`){
        saveName();
    }
})

function saveName() {
    let enteredName = document.getElementById('name-input').value;
    enteredName = enteredName.trim();
    if(enteredName !== null && enteredName !== ``){
    localStorage.setItem('username', enteredName);
    showWelcomeModal(enteredName);}
    else {
        showWelcomeModal(`NoName`)
    }
}

function showWelcomeModal(username) {
welcomeModal.style.display = 'block';
document.getElementById('welcome-username').textContent = username;
nameInputModal.style.display = 'none';
document.body.classList.remove('modal-open');
}