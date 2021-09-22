
var imgGalleryArr = [
  'Album 1',
  'Album 2',
  'Album 3',
  'Cofee',
  'Shirt',
];

var currentPhoto = document.getElementById('currentPhoto');
var nextPhoto = document.getElementById('nextPhoto');
var prevPhoto = document.getElementById('prevPhoto');

var step = 0;

function setCurrentPhoto() {
  if (step > imgGalleryArr.length - 1) {
    step = 0;
  } else if (step < 0) {
    step = imgGalleryArr.length - 1;
  }
  currentPhoto.src = `../task_2/images/${imgGalleryArr[step]}.png`;
}

setCurrentPhoto();

nextPhoto.onclick = function() {
  step++;
  setCurrentPhoto();
};

prevPhoto.onclick = function() {
  step--;
  setCurrentPhoto();
};
