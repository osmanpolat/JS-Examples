document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  var modal = document.createElement("div");
  modal.id = "myModal";
  modal.classList.add("modal");

  // Get the modal Content
  var modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  //Close button
  var closeSpan = document.createElement("span");
  closeSpan.classList.add("close");
  closeSpan.innerHTML = "&times;";
  modalContent.appendChild(closeSpan);

  //Modal text
  var modalText = document.createElement("p");
  modalText.textContent = "Some text in the modal...";
  modalContent.appendChild(modalText);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Get the button that opens the modal
  var btn = document.createElement("button");
  btn.id = "myBtn";
  btn.textContent = "Open Modal";
  document.body.appendChild(btn);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
