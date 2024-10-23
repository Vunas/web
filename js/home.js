
function showMenu(){
	var menuList = ['ALL','GUNDAM','Mô hình tĩnh','FIGURE RISE','Dụng Cụ','Dragon Ball','FIGURE'];
	var ul = document.getElementById('product');
	var li='';
	for(var i=0;i<menuList.length;i++){
		li += '<li><a href="index.html?'+menuList[i].toLowerCase()+'&0">'+menuList[i]+'</a></li>';
	}
  ul.innerHTML= li;
}

function showListMobile(){
	var menuList = ['GUNDAM','Mô hình tĩnh','FIGURE RISE','Dụng Cụ','Dragon Ball','FIGURE'];
	var ul = document.getElementById('mobile__product');
	var li='';
	for(var i=0;i<menuList.length;i++){
		li += '<li><a href="index.html?'+menuList[i].toLowerCase()+'&0">'+menuList[i]+'</a></li>';
	}
  ul.innerHTML= li;
}

/* div search*/

function open_search() {
  document.getElementById("modal__overlay").style.display = "block";
  document.getElementById("search_div").style.height = "50px";
}

function close_search() {
  close__advanced_search();
  document.getElementById("modal__overlay").style.display = "none"  ;
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

// login/logout
function checkform(){
  var username= document.getElementById("username");
  var password= document.getElementById("password");
  var kq="";

  if(username == ""){
    kq="vui lòng nhập tên đăng nhap";
    alert("no");
  }

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

window.onload = function () {
  // if (getCookie('explored') === 'true') {
  //     document.querySelector("#Bodyy").style.display = 'block';
  //     document.querySelector(".starter").style.display = 'none';
  // }
  let list = document.querySelector('.slider .list');
  let items = document.querySelectorAll('.slider .list .item');
  let dots = document.querySelectorAll('.slider .dots li');
  let prev = document.getElementById('prev');
  let next = document.getElementById('next');

  let active = 0;
  let lengthItems = items.length - 1;
  next.onclick = function () {
      if (active + 1 > lengthItems)
          active = 0;
      else
          active += 1;
      reloadSlider();
  }

  prev.onclick = function () {
      if (active - 1 < 0)
          active = lengthItems;
      else
          active -= 1;
      reloadSlider();
  }

  let refreshSlider = setInterval(() => { next.click() }, 5000);

  function reloadSlider() {
      let checkLeft = items[active].offsetLeft;
      list.style.left = -checkLeft + 'px';
      let LastActiveDot = document.querySelector('.slider .dots li.active');
      LastActiveDot.classList.remove('active');
      dots[active].classList.add('active');
      clearInterval(refreshSlider);
      refreshSlider = setInterval(() => { next.click() }, 5000);
  }

  dots.forEach((li, key) => {
      li.addEventListener('click', function () {
          active = key;
          reloadSlider();
      });
  });
  document.getElementById('submitButton').addEventListener('click', function () {
      const emailInput = document.getElementById('emailInput').value;
      const submitButton = document.getElementById('submitButton').value;
      var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (emailPattern.test(emailInput)) {
          showSuccessToast();
          resultContainer.textContent = 'Thành công';
          document.getElementById('emailInput').value = '';
      }
      else {
          showErrorToast();
          resultContainer.textContent = 'Vui lòng nhập email';
      }
  });
}

function showSuccessToast() {
  toast(
      {
          title: 'Thành công!',
          message: 'Bạn đã nhập email thành công.',
          type: 'success',
          duration: 5000
      })
}
function showErrorToast() {
  toast(
      {
          title: 'Thất bại!',
          message: 'Có lỗi xảy ra.',
          type: 'error',
          duration: 5000
      })
}

function toast({
  title = '', message = '', type = 'info', duration = 3000
}) {
  const main = document.getElementById('toast');
  if (main) {
      const toast = document.createElement('div');
      // auto remove toast
      const autoRemoveId = setTimeout(function () {
          main.removeChild(toast);
      }, duration + 1000);
      // Remove when click
      toast.onclick = function (e) {
          if (e.target.closest('.toast__close')) {
              main.removeChild(toast);
              clearTimeout(autoRemoveId);
          }
      }

      const icons = {
          success: 'fa-solid fa-circle-check',
          info: 'fa-solid fa-circle-info',
          warning: 'fa-solid fa-circle-exclamation',
          error: 'fa-solid fa-circle-exclamation',
      };
      const icon = icons[type];
      const delay = (duration / 1000).toFixed(2);
      toast.classList.add('toast', `toast--${type}`);
      toast.style.animation = `slideInLeft ease-in-out 0.8s,fadeOut linear 1s ${delay}s forwards`;
      toast.innerHTML = `
          <div class="toast__icon">
              <i class="${icon}"></i>
          </div>
          <div class="toast__body">
              <h3 class="toast__title">${title}</h3>
              <p class="toast__msg">${message}</p>
          </div>
          <div class="toast__close"><i class="fa-solid fa-circle-xmark"></i></div>
  `;
      main.appendChild(toast);
  }
}

// function toggleBodyy() {
//     const bodyy = document.querySelector("#Content");
//     bodyy.classList.add('show');
//     document.querySelector(".starter").style.display = 'none';
// }

// // Hàm để đặt cookie
// function setCookie(name, value, days) {
//     let expires = "";
//     if (days) {
//         const date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }

// // Hàm để đọc cookie
// function getCookie(name) {
//     const nameEQ = name + "=";
//     const ca = document.cookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) === ' ') c = c.substring(1, c.length);
//         if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
//     }
//     return null;
// }
