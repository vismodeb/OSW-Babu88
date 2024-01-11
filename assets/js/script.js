
document.addEventListener('DOMContentLoaded', function() {
  var imageSelector = document.getElementById('imageSelector');
  var imageContainer = document.getElementById('imageContainer');
  var images = document.querySelectorAll('#imageContainer img');

  // Set up the event listener for the select element
  imageSelector.addEventListener('change', function() {
  var selectedValue = imageSelector.value;

  // Hide all images
  images.forEach(function(image) {
    image.style.display = 'none';
  });

  // Show the selected image
  var selectedImage = document.getElementById(selectedValue);
  if (selectedImage) {
    selectedImage.style.display = 'block';
  }
  });
});