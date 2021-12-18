 




//     var firstname=document.querySelector('#fname').value
//     var lastname=document.querySelector('#lname').value
//     var em=document.querySelector('#eml').value
//     var password=document.querySelector('#pass').value
//     if(firstname==''||lastname==''||em==''||password=='')
//    { alert('Please enter all details!')
//         }

//     var userdata={
//         namef:firstname,
//         namel:lastname,
//         email:em,
//         pass:password,

//     };

var x=JSON.parse(localStorage.getItem("userdatabase"))
 
document.querySelector("#fname").value=x[0].namef

document.querySelector('#tbill').value=JSON.parse(localStorage.getItem("totalbill"))
 
    localStorage.removeItem("totalbill")
document.querySelector("#otp").addEventListener("click",function(){
    window.location.href="otp.html"
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
