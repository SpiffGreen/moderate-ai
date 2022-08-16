function init() {
  // Select image and file input to add image change support
  const selectedImage = document.getElementById("selectedImage");
  const selectInput = document.getElementById("selectInput");
  selectInput.addEventListener("change", e => {
    var selectedFile = URL.createObjectURL(e.target.files[0]);
    selectedImage.src = selectedFile;
  });

  // Check image
  const scanBtn = document.getElementById("scan");
  scanBtn.addEventListener("click", () => {
    nude.load('selectedImage');
    nude.scan(function (result) {
      if (!result) document.getElementById('result').innerText = 'No nude!!';
      else document.getElementById('result').innerText = 'This image may contain nude';
    });
  });
}

document.addEventListener("DOMContentLoaded", init);