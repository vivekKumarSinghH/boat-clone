var p=JSON.parse(localStorage.getItem("productdetail"))



function iswired(value) {
    return value.type=="wired"
  }
  
  var prod=p.filter(iswired)
  
  
  
  
  


Displayitem(prod)

function handlepricesort(){
    var selected=document.querySelector("#priceSort").value

    if(selected=="low"){
        prod.sort(function(a,b){
            return Number(a.price)-Number(b.price)
        })
        Displayitem(prod)
    }
    else{
        prod.sort(function(a,b){
            return Number(b.price)-Number(a.price)
        })
        Displayitem(prod)
    }
 
}


function Displayitem(products){

document.querySelector('#cont').textContent=""
products.map(function (ele){
var imag=document.createElement("img")

imag.setAttribute("src",ele.img)
var c=ele


var h3=document.createElement('h3')
h3.textContent=ele.name



var h2=document.createElement('h2')
h2.textContent="Rs."+ele.price



var h5=document.createElement('h5')
h5.textContent= "Rs. "+ele.mrp

var disc=document.createElement('h3')
disc.textContent="Discount "+ele.discount+"%"

var button=document.createElement("button")
button.addEventListener("click",function(){

    addtocart(ele)

})




button.textContent="Add to cart"
button.setAttribute('id','addtocartbtn')
var discdiv=document.createElement('div')
discdiv.append(disc,button)
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
document.querySelector('#cont').append(diviii)


divi.addEventListener("click",function(){
    localStorage.setItem("one",JSON.stringify(c))
    window.location.href="onepro.html"
})

})


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