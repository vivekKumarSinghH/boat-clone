

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
  var dots = document.getElementsByClassName("dot");
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


document.querySelector("#shop").addEventListener("click",function(){
    window.location.href="productpage.html"
})

document.querySelector("#image1").addEventListener("click",function(){
    window.location.href="productpage.html"
})

document.querySelector("#image2").addEventListener("click",function(){
    window.location.href="wireless.html"
})
document.querySelector("#image3").addEventListener("click",function(){
    window.location.href="watches.html"
})

document.querySelector(".gg-shopping-cart").addEventListener("click",function(){
    window.location.href="cart.html"
})

document.querySelector(".gg-user").addEventListener("click",function(){
    window.location.href="signin.html"
})

document.querySelector("#daily").addEventListener("click",function(){
    window.location.href="dailydeals.html"
})



document.querySelector("#Wiredpage").addEventListener("click",function(){
    window.location.href="wired.html"
})


document.querySelector("#Wirelesspage").addEventListener("click",function(){
    window.location.href="wireless.html"
})


document.querySelector("#Watchespage").addEventListener("click",function(){
    window.location.href="watches.html"
})


var prod=JSON.parse(localStorage.getItem("productdetail"))




function iswired(value) {
  return value.type=="wired"
}

var a=prod.filter(iswired)


function iswireless(value) {
  return value.type=="wireless"
}

var b=prod.filter(iswireless)


function iswatch(value) {
  return value.type=="watch"
}

var c=prod.filter(iswatch)




function sort(x){
        x.sort(function(a,b){
            return Number(a.price)-Number(b.price)
        });

        return x.slice(0,3)
    }

var d=sort(a)
var e=sort(b)
var f=sort(c)

       Displayitem(d,"#topwired")
       Displayitem(e,"#topwireless")
       Displayitem(f,"#topwatches")
    
    

function Displayitem(element,x){

document.querySelector(x).textContent=""


element.map(function (ele){
var c=ele

var imag=document.createElement("img")

imag.setAttribute("src",ele.img)


var h3=document.createElement('h3')
h3.textContent=ele.name



var h2=document.createElement('h2')
h2.textContent="Rs."+ele.price



var h5=document.createElement('h5')
h5.textContent= "Rs."+ele.mrp

var disc=document.createElement('h3')
disc.textContent="Discount "+ele.discount+"%"




var discdiv=document.createElement('div')
discdiv.append(disc)
discdiv.setAttribute('id',"disc")

// var p=document.createElement("p")
// p.textContent=ele.type
var divi=document.createElement('div')
var divii=document.createElement('div')
var diviii=document.createElement('div')
var pricediv=document.createElement('div')

divi.append(imag)
divii.append(h3,pricediv,discdiv)
pricediv.append(h2,h5)
diviii.append(divi,divii)
document.querySelector(x).append(diviii)


diviii.addEventListener("click",function(){

    localStorage.setItem("one",JSON.stringify(c))
    window.location.href="onepro.html"
})

})

}