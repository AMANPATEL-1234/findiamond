
document.getElementById("submit").addEventListener("click",myfunction)
function myfunction(){
    var obj={
 name:document.getElementById("user_name").value,
 image:document.getElementById("user_pic").value,
 email:document.getElementById("user_email").value,
 country:document.getElementById("user_country").value,}

localStorage.setItem("user",JSON.stringify(obj))

}

function navbar(){
  return` 
  <h3>News App</h3>
  <h3>Sign-Up</h3>
  <h3>
    <a href="/worldNews.html">World News</a>
  </h3>`
}
export {navbar, myfunction} 