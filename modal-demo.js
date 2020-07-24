var focusedElementBeforeModal; // to hold previously-focused element
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");
var modalToggle = document.querySelector(".modal-toggle");

modalOverlay.addEventListener("click", closeModal);
modal.addEventListener("keydown", listenForEscapeKey);
modalToggle.addEventListener("click", function openModal() {
  focusedElementBeforeModal = document.activeElement;

  var signUpBtn = modal.querySelector("#signup");
  signUpBtn.addEventListener("click", closeModal);

  // Show the modal and overlay
  modal.style.display = "block";
  modalOverlay.style.display = "block";

  setUpKeyboardFocusTrap(modal, document.getElementById("email"));
});

function closeModal() {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
  focusedElementBeforeModal.focus();
}

function listenForEscapeKey(e) {
  var hitEscape = (e.keyCode || e.which) === 27;
  if (hitEscape) {
    closeModal();
  }
}
