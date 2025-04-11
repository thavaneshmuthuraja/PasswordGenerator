var pass=document.getElementById("pwd");
var btn=document.getElementById("gen");
btn.addEventListener("click",function(){
    var password='';
    var values='de,dhjBUYj[pdjew87HOIJ82762099V,mm,MBVBCCVBNM,dxbvxvVHDBSDHGHXCZXDARAAA[[]][[DJBCEE33#$%*()&^&%$#@]];L,D';
    for(let i=0;i<7;i++){
    var singlevalue=Math.floor(Math.random()*values.length+1)
    password+=values.charAt(singlevalue);
    pass.style.display="block"
    pass.innerText=password;
    }
})