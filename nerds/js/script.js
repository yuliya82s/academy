var link = document.querySelector(".contact-us");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var cancel = document.querySelector(".buttons .cancel");
var contact_name = popup.querySelector("[name=contact-name]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  contact_name.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});

cancel.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});