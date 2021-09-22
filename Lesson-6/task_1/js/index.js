

function changeBigPicture(event) {
  var bigPicture = document.querySelector('.big_picture');
  var img = document.createElement('img');

  img.src = event.currentTarget.src.replace('small', 'big');
  bigPicture.innerHTML = '';
  img.onload = function(){bigPicture.append(img);} ;
  img.onerror = function(){bigPicture.textContent = '404. Изображение не найдено';} ;
}


document.addEventListener('DOMContentLoaded', function () {
  var images = document.getElementsByClassName('gallery');
  for (var img of images) {
    img.addEventListener('click', changeBigPicture);
  }
});
