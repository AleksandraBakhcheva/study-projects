let firstPic = "images/img1.jpeg";
let secondPic = "images/img2.jpeg";
let thirdPic = "images/img3.jpeg";
let fourthPic = "images/img4.jpeg";

function showNextPic() {
  let image = document.querySelector(".first-pic");
  if (image.src.match(firstPic)) {
    image.src = secondPic;
  } else if (image.src.match(secondPic)) {
    image.src = thirdPic;
  } else if (image.src.match(thirdPic)) {
    image.src = fourthPic;
  } else {
    image.src = firstPic;
  }
}

function showPreviousPic() {
  let image = document.querySelector(".first-pic");
  if (image.src.match(firstPic)) {
    image.src = fourthPic;
  } else if (image.src.match(fourthPic)) {
    image.src = thirdPic;
  } else if (image.src.match(thirdPic)) {
    image.src = secondPic;
  } else {
    image.src = firstPic;
  }
}
