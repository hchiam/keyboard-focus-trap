function setUpKeyboardFocusTrap(modalElement, customTabStop) {
  // Note: display modal before calling setUpKeyboardFocusTrap(modal);
  var focusableElements = modalElement.querySelectorAll(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]'
  );
  var firstTabStop = customTabStop || focusableElements[0];
  var lastTabStop = focusableElements[focusableElements.length - 1];
  if (!firstTabStop) return; // no sub-elements to focus on
  firstTabStop.focus();
  modalElement.addEventListener("keydown", trapTabKey);
  function trapTabKey(event) {
    var hitTab = (event.keyCode || event.which) === 9;
    var hitShift = event.shiftKey;
    if (hitTab && hitShift) {
      if (document.activeElement === firstTabStop) {
        event.preventDefault();
        lastTabStop.focus();
      }
    } else if (hitTab && !hitShift) {
      if (document.activeElement === lastTabStop) {
        event.preventDefault();
        firstTabStop.focus();
      }
    }
  }
}
