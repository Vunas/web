let DanhSachSanPham = JSON.parse(localStorage.getItem("product"));
chuyenHTMLthanhDanhSachProduct();
function chuyenHTMLthanhDanhSachProduct() {
    let HTML = '<div class="card__items">'
    HTML +='<div class="filter">'
    HTML += '<section id="choose">'
    HTML += '<select name="" class="filter__card--name">'
    HTML += ' <option value="GUNDAM">GUNDAM</option>'
    HTML += '<option value="MÔ HÌNH TĨNH">MÔ HÌNH TĨNH</option>'
    HTML += '<option value="FIGURE-RISE">FIGURE-RISE</option>'
    HTML += '<option selected value="All">Tất cả sản phẩm</option>'
    HTML += '<option value="DỤNG CỤ">DỤNG CỤ</option>'
    HTML += '<option value="DRAGON BALL">DRAGON BALL</option>'
    HTML += `<option value="FIGURE">FIGURE</option>`
    HTML += `</select>`
    HTML += `</section>`
    HTML += '<button>Thêm sản phẩm</button>'    
    HTML +='</div>';
    let nodeContainerRightCard = document.querySelector(".container__right--card");
    for (let i = 0; i < DanhSachSanPham.length; i++) {
        let htmlSanPham = chuyenHTMLthanhProduct(DanhSachSanPham[i]);
        HTML = HTML + htmlSanPham;
    }
    HTML = HTML + '</div>'
    nodeContainerRightCard.innerHTML = HTML;
}
function chuyenHTMLthanhProduct(sanPham) {
    html = ''
    html += `<div class="card__item">`
    html += `<div class="card__item--left">`
    html += `<img src="` + sanPham.image1 + `" alt="">`
    html += `</div>`
    html += `<div class="card__item--middle">`
    html += `<div class="card__name--middle">`
    html += `` + sanPham.name + ``
    html += `</div>`
    html += `<div class="card__introduce--middle">`
    html += `` + sanPham.introduce + ``
    html += `</div>`
    html += `</div>`
    html += `<div class="card__item--right">`
    html += ` <div class="card__price--right">`
    html += `<span>` + (sanPham.price * 1000).toLocaleString() + ` <sup>VNĐ</sup></span>`
    html += `</div>`
    html += `<div class="card__edit__delete--right">`
    html += `<i class="fa fa-pencil-square" aria-hidden="true"></i>`
    html += ` <i class="fa fa-trash" aria-hidden="true"></i>`
    html += ` </div>`
    html += `</div>`
    html += ` </div>`
    return html;
}


