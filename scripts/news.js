var a= JSON.parse(localStorage.getItem("user"))
console.log(a);

a.forEach(function(el){
  var a=document.createElement("img");
  a.setAttribute("src",el.user_img);
  var b=document.createElement("h3");
  b.innerText-el.user_name;
  var c=document.createElement("h3")
  c.innerText=el.user_email;
  var d=document.createElement("h3")
  d.innerText=el.user_country;
  document.querySelector("#use").append(a,b,c,d)

})


