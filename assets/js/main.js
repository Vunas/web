/* div search*/

function open_search() {
  document.getElementById("modal__overlay").style.display = "block";
  document.getElementById("search_div").style.height = "50px";
}

function close_search() {
  document.getElementById("modal__overlay").style.display = "none";
  document.getElementById("search_div").style.height = "0px";
}

/*advanced search*/

function advanced_search(){
  document.getElementById("search_div").style.height = "100px";
  document.getElementById("chevron-up").style.display="block";
  document.getElementById("chevron-down").style.display="none";
}

function close__advanced_search(){
  document.getElementById("search_div").style.height = "50px";
  document.getElementById("chevron-up").style.display="none";
  document.getElementById("chevron-down").style.display="block";
}

/*sideNavbar*/

function open_sideNav() {
  document.getElementById("modal__overlay").style.display = "block";
  document.getElementById("sideNav").style.width = "400px";
}

function close_sideNav() {
  document.getElementById("modal__overlay").style.display = "none";
  document.getElementById("sideNav").style.width = "0px";
}

/*sideNav__productSide*/

function open_productSide(){
  document.getElementById("sideNav__productSide").style.width="400px";
}

function close_productSide(){
  document.getElementById("sideNav__productSide").style.width="0";
}
