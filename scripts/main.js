let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hammer-sickle.png') {
      myImage.setAttribute ('src','images/marx.jpg');
    } else {
      myImage.setAttribute ('src','images/hammer-sickle.png');
    }
}
