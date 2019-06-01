//v myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }

  document.querySelector('h2').onclick = function() {
    alert('Ouch! Stop poking me!'); }

    var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/welcome.png') {
      myImage.setAttribute ('src','images/meh.png');
    } else {
      myImage.setAttribute ('src','images/welcome.png');
    }
}