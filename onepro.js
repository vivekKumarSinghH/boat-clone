var prod=JSON.parse(localStorage.getItem("one"))

Displayitem(prod)



document.querySelector('#addtocartbtn').addEventListener("click",function(){

    addtocart(prod)

})


function Displayitem(ele){

document.querySelector('#cont').textContent=""




var imag=document.createElement("img")

imag.setAttribute("src",ele.img)


var h3=document.createElement('h3')
h3.textContent=ele.name



var h2=document.createElement('h2')
h2.textContent="Rs."+ele.price



var h5=document.createElement('h5')
h5.textContent= "Rs. "+ele.mrp

var disc=document.createElement('h3')
disc.textContent="Discount "+ele.discount+"%"

var button=document.createElement("button")



button.textContent="Add to cart"
button.setAttribute('id','addtocartbtn')
var discdiv=document.createElement('div')
discdiv.append(disc,button)
discdiv.setAttribute('id',"disc")

// var p=document.createElement("p")
// p.textContent=ele.type
var divi=document.createElement('div')
var divii=document.createElement('div')
var pricediv=document.createElement('div')

divi.append(imag)
divii.append(h3,pricediv,discdiv)
pricediv.append(h2,h5)
document.querySelector('#cont').append(divi,divii)




}







var cart=[]||JSON.parse(localStorage.getItem("procart"))

function addtocart(ele){

     cart.push(ele)

     localStorage.setItem("procart",JSON.stringify(cart))

}


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