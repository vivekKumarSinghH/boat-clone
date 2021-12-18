

document.querySelector('#tologin').addEventListener('click',function(){
window.location.href="signin.html"
})

document.querySelector('#tohome').addEventListener('click',function(){
window.location.href='home.html'
})

document.querySelector('#create').addEventListener('click',adduser);
var userhis=JSON.parse(localStorage.getItem('userdatabase')) || [] ;

function adduser(){




var firstname=document.querySelector('#fname').value
var lastname=document.querySelector('#lname').value
var em=document.querySelector('#eml').value
var password=document.querySelector('#pass').value

var userdata={
    namef:firstname,
    namel:lastname,
    email:em,
    pass:password,

};


if(firstname==''||lastname==''||em==''||password=='')
{ alert('Please enter all details!')
    }
else{     
  
  if(isAlreadySignedUp(userdata)){
    alert('You have already signed up!! Please log in with your credentials.')
    window.location.href="signin.html";
  }else{
    userhis.push(userdata)

     localStorage.setItem("userdatabase",JSON.stringify( userhis));
     alert("Your Account has been created sucessfully,You can login now!")
     window.location.href="signin.html";  

     


            
  
  }
}

}


function isAlreadySignedUp(user) {

for (var i = 0; i < userhis.length; i++) {
if ((userhis[i].namef == user.namef) && (userhis[i].namel == user.namel ) && (userhis[i].email == user.email) &&(userhis[i].password == user.password)){
return true;
}
}  
return false;
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










