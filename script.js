
const rLogin=document.getElementById("rLogin");
const rSignup=document.getElementById("rSignup");
const recruiterBtn=document.getElementById("recruiterBtn");
const jobseekerBtn=document.getElementById("jobseekerBtn");
const rSignupBtn=document.getElementById("rSignupBtn");
const rLoginBtn=document.getElementById("rLoginBtn");
recruiterBtn.addEventListener('click',function(){
  rLogin.style.display=(rLogin.style.display==='none')?'block':'none'
  rSignup.style.display="none"
  jLogin.style.display="none"
  jSignup.style.display="none"
});

rSignupBtn.onclick=function() {
  rSignup.style.display="block"
  rLogin.style.display="none"
}
rLoginBtn.onclick=function() {
  rLogin.style.display="block"
  rSignup.style.display="none"
};



function redirectToHomePage() {
  window.location.href="index.html"
};
const jLogin=document.getElementById("jLogin")
const jSignup=document.getElementById("jSignup")
const jSignupBtn=document.getElementById("jSignupBtn")
const jLoginBtn=document.getElementById("jLoginBtn")

jobseekerBtn.addEventListener('click',function(){
  jLogin.style.display=(jLogin.style.display==='none')?'block':'none'
  jSignup.style.display="none"
  rLogin.style.display="none"
  rSignup.style.display="none"
});
jSignupBtn.onclick=function() {
  jSignup.style.display="block"
  jLogin.style.display="none"
  
}
jLoginBtn.onclick=function() {
  jLogin.style.display="block"
  jSignup.style.display="none"
  
};

const burger=document.querySelector('.burger');
const menu=document.querySelector('.menu');
burger.addEventListener('click',function(){
 burger.classList.toggle("active");
 menu.classList.toggle("active");
 
})
document.querySelectorAll("nav ul li a").forEach(n=>n.addEventListener("click",function(){
  burger.classList.remove("active");
  menu.classList.remove("active");
  scroll="behaviour : smooth"
}));



   
