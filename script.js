// Get an HTML element in JavaScript code
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const signupModal = document.querySelector(".signup-modal-wrapper");
const closeButtonSignup = document.querySelector(".close-modal-signup");
const loginModal = document.querySelector(".login-modal-wrapper");
const closeButtonLogin = document.querySelector(".close-modal-login");

const submitBtnSignup = document.querySelector("#signup-submit-btn");
const submitBtnLogin = document.querySelector("#login-submit-btn");
const signupEmail = document.querySelector(".semail");
const loginEmail = document.querySelector(".lemail");
const signupPass = document.querySelector(".spass");
const loginPass = document.querySelector(".lpass");

// function which shows the modal by changing the style of signupModal to "block"
const showModalSignup = () => {
  signupModal.style.display = "block";
};

const showModalLogin = () => {
    loginModal.style.display = "block";
};

// function which hides the modal by changing the style of signupModal to "none"
const closeModalSignup = () => {
  signupModal.style.display = "none";
};

const closeModalLogin = () => {
    loginModal.style.display = "none";
};

// Call the showModal function when signup button is clicked
signup.addEventListener("click", () => {
  showModalSignup();
});

login.addEventListener("click", () => {
    showModalLogin();
});

// Call the closeModal function when close button on the modal is clicked
closeButtonSignup.addEventListener("click", () => {
  closeModalSignup();
});

closeButtonLogin.addEventListener("click", () => {
    closeModalLogin();
});

// Call the closeModal function when anywhere outside of the modal is clicked
window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModal();
  }
});