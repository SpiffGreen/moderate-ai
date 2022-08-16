const classifier = ml5.imageClassifier('model.json', modelLoaded);

function modelLoaded() {
  const inp = document.getElementById("imageSelector");
  inp.addEventListener("change", classifyImage);
}

function classifyImage(e) {
  const selectedImage = document.getElementById("imagePreview");
  var selectedFile = URL.createObjectURL(e.target.files[0]);
  selectedImage.src = selectedFile;
  selectedImage.onload = function () {
    // Make a prediction with a selected image
    classifier.classify(selectedImage, (err, results) => {
      if(err) throw err;
      console.log(results);
    });
  };
}