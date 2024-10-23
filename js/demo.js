// let DanhSachSanPham=JSON.parse(localStorage.getItem("product"));
// let producttemp={
//     id:DanhSachSanPham[DanhSachSanPham.length-1].id,
//     image1: "./img_gundam/img41.jpg",
//     image2: "./img_gundam2/img41.jpg",
//     image3: "./img_gundam3/img41.jpg",
//     image4: "./img_gundam4/img41.jpg",
//     detail1: "Thương hiệu: Bandai",
//     detail2: "Chất liệu : PVC cao cấp ",
//     detail3: "Xuất xứ : Nhật Bản",
//     detail4: "Kích thước : Cao khoảng 20.5cm",
//     name: "DRAGON BALL",
//     introduce: "Mô hình lắp ráp Dragon Ball Final Form Frieza",
//     price: 870,
// };
// DanhSachSanPham.unshift(producttemp);
// alert(DanhSachSanPham.length);
// localStorage.setItem("product",JSON.stringify(DanhSachSanPham));
let DanhSachSanPham=JSON.parse(localStorage.getItem("product"));
function addProduct(){
    let textImg1=document.querySelector("#img1");
    let textImg2=document.querySelector("#img2");
    let textImg3=document.querySelector("#img3");
    let textImg4=document.querySelector("#img4");
    let textDetail1=document.querySelector("#detail1");
    let textDetail2=document.querySelector("#detail2");
    let textDetail3=document.querySelector("#detail3");
    let textDetail4=document.querySelector("#detail4");
    let textName=document.querySelector("#name");
    let textIntroduce=document.querySelector("#introduce");
    let textPrice=document.querySelector("#price");
    let productTemp={
        id:DanhSachSanPham[0].value+1,
        image1: textImg1.value,
        image2: textImg2.value,
        image3: textImg3.value,
        image4: textImg4.value,
        detail1:textDetail1.value,
        detail2:textDetail2.value,
        detail3:textDetail3.value,
        detail4:textDetail4.value,
        name:textName.value,
        introduce:textIntroduce.value,
        price: textPrice.value,
    }
    DanhSachSanPham.unshift(productTemp);
    localStorage.setItem("product",JSON.stringify(DanhSachSanPham));
}