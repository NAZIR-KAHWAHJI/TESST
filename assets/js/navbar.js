// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle1");
let navigation = document.querySelector(".navigation1");
let main = document.querySelector(".main1");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

function logout(){

  document.cookie = "userLoggedIn=; expires=Wed, 01 Dec 2021 00:00:00 UTC; path=/";
    
  // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول أو أي صفحة أخرى
  window.location.href = "Login.html";
}