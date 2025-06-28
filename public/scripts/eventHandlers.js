// Get the modal
var modal = document.getElementById("addPostModal");

document
  .getElementById("add-post-button")
  .addEventListener("click", function () {
    modal.classList.remove("hide-modal");
  });

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.add("hide-modal"); 
  }
}


// Get the <span> element that closes the modal
document.getElementById("close-modal").addEventListener("click", function () {
  modal.classList.add("hide-modal"); 
});


