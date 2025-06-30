// Get the modal
var modal = document.getElementById("addPostModal");

$("#add-post-button").on("click", function () {
  modal.classList.remove("hide-modal");
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add("hide-modal");
  }
};

// Event listener for the <span> element that closes the modal
$("#close-modal").on("click", function () {
  modal.classList.add("hide-modal");
});

$("#delete-post-button").on("click", function () {
  const postId = $(this).data("post-id");
  $.ajax({
    url: `/blog/${postId}`,
    type: "DELETE",
    success: function (result) {
      alert("Post deleted successfully.");
      // Optionally, you can redirect or remove the post from the DOM
      window.location.href = "/";
    },
    error: function (err) {
      alert("Error deleting post.");
    },
  }).then;
});
