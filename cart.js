

var prod=JSON.parse(localStorage.getItem("procart"))

if(prod==null){
  alert('cart is empty please add some products')
}
else{
Displayitem(prod)}



function Displayitem(products){
var total=0

document.querySelector('#cont').textContent=""
products.map(function (ele){
var imag=document.createElement("img")

imag.setAttribute("src",ele.img)


var h3=document.createElement('h3')
h3.textContent=ele.name

total+=(+ele.price)

var h2=document.createElement('h2')
h2.textContent="Rs."+ele.price



var h5=document.createElement('h5')
h5.textContent= "Rs. "+ele.mrp

var disc=document.createElement('h3')
disc.textContent="Discount "+ele.discount+"%"


var discdiv=document.createElement('div')
discdiv.append(disc)
discdiv.setAttribute('id',"disc")

// var p=document.createElement("p")
// p.textContent=ele.type
var divi=document.createElement('div')
var divii=document.createElement('div')

divii.setAttribute('id','textdiv')
var diviii=document.createElement('div')
var pricediv=document.createElement('div')

divi.append(imag)
divii.append(h3,pricediv,discdiv)
pricediv.append(h2,h5)
diviii.append(divi,divii)
document.querySelector('#cont').append(diviii)




})
document.querySelector('#Total').append(total)
localStorage.setItem("totalbill",JSON.stringify(total))
}


document.querySelector('#checkout').addEventListener("click",function(){
  if(prod==null){
  alert('Cart is empty please add some products')
}
else{
 window.location.href="checkout.html"}
})

document.querySelector('#clear').addEventListener("click",function(){
  if(prod==null){
  alert('Cart is empty please add some products')
}
else{
  localStorage.removeItem("procart");
  localStorage.removeItem("totalbill");
  window.location.href="cart.html"
  Displayitem(prod)}
})




 
document.querySelector("#shop").addEventListener("click",function(){
    window.location.href="productpage.html"
})


document.querySelector("#boatlogo").addEventListener('click',function(){
    window.location.href="home.html"
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






