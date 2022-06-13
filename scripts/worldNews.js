function nav(){
return` <input type="text" id="search_box"/>
<h3><a href="in">India</a></h3>
<h3><a href=""></a>USA</h3>
<h3><a href>China</a></h3>
<h3><a href>UK </a></h3>
<h3><a href>New Zealand</a></h3>`

}
export {nav}


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
  document.querySelector("#sidebar").append(a,b,c,d)

})
async function data(a){
    let value=a.user_country;

    let data=await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}")
    let res=data.json();
    append(res.data)
}
function append(res,){
res.forEach(function(el){
let a=document.createElement("img")
a.setAttribute("src",el.image)
let b=document.createElement("h3")
b.setAttribute("class","news")
b.innerText=el.description;
let c=document.createElement("h3")
c.innerText=el.title;
document.querySelector("#news_result").append(a,b,c)

})

}