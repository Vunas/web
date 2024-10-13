window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  var brand = document.getElementById("brand");
  var brand_item = document.getElementById("brand-item");

  if (window.scrollY > 30) {
    nav.classList.add("add");
    brand.className = "small__brand";
    brand_item.className = "small__brand-item";
  } else {
    nav.classList.remove("add");
    brand.className = "brand";
    brand_item.className = "brand-item";
  }
});

function open_search() {
  document.getElementById("modal__overlay").style.display = "block";
  document.getElementById("search_div").style.height = "50px";
}

function close_search() {
  document.getElementById("modal__overlay").style.display = "none";
  document.getElementById("search_div").style.height = "0px";
}

/*sideNavbar*/

function open_sideNav() {
  document.getElementById("modal__overlay").style.display = "block";
  document.getElementById("sideNav").style.width = "500px";

}

function close_sideNav() {
  document.getElementById("modal__overlay").style.display = "none";
  document.getElementById("sideNav").style.width = "0px";
}
