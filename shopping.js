/*add */
var counter = 1;
function upvote(){
	counter = counter+1;
	document.getElementById("votes").innerHTML = counter;
}
function downvote(){
	counter = counter -1;
	document.getElementById("votes").innerHTML = counter;
}
/*add to cart*/
const cartItems =[];
let isTotalHidden = true;
const sneakers = {
	name:"sneakers",
	price:125
};
function addToCart(item){
	cartItems.push(item);
	document.getElementById("itemcounter").innerHTML = cartItems.length;
	showTotal();
}
function clickCart(){
	isTotalHidden = !isTotalHidden;
	showTotal();
}
function showTotal(){
const orderTotal =
document.getElementById("ordertotal");
orderTotal.innerHTML = "";
if(isTotalHidden === false){
	let total = 0;
	for(let i = 0; i<cartItems.length; i++){
		total += cartItems[i].price;
	}
	orderTotal.innerHTML += "Total:$" + total;
}
}
/*lightbox*/
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}