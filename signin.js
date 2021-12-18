
var data=JSON.parse(localStorage.getItem('userdatabase'));

document.querySelector('h3').addEventListener('click',function(){
    window.location.href="signup.html"
})

document.querySelector("#signinbutton").addEventListener("click",function(){
var check=false;

var useremail=document.querySelector('#eml').value
var userpass=document.querySelector('#pass').value



if(userpass==''|| useremail=='')
{ alert('Please enter all details!')
    }

else {
if(useremail=="admin"&& userpass=='admin'){
alert('login sucessful as admin!')
window.location.href="home.html"
}
else{
for(var i=0;i<data.length;i++){
    if((useremail== data[i].email)&&(userpass==data[i].pass)){
        alert('login sucessful!')
        window.location.href="home.html"
  

    }
}

}
}

alert('Please enter correct details!')

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