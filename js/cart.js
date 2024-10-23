//cập nhật số lượng trên giỏ hàng
function soLuongSPGH(){
    document.querySelector(".gioHang span").innerText=gioHang.length;
}




//Lưu giỏ hàng vào localstorage
let gioHang = [];
if(localStorage.getItem("gioHang"))
    gioHang=JSON.parse(localStorage.getItem("gioHang"));
    const btn=document.querySelectorAll(".card__addcart");
    btn.forEach(function(information){
    information.addEventListener("click",function(event){
        let bTn=event.target;
        let elementParent=bTn.parentNode.parentNode;
        let cardIMG = elementParent.querySelector(".card__img img").src;
        let cardNAME = elementParent.querySelector(".card__name").innerText;
        let cardINTRODUCE= elementParent.querySelector(".card__introduce").innerText;
        let cardPRICE= elementParent.querySelector(".card__price span").innerText;
        let cardSL=1;
        let sp=new Array(cardIMG,cardNAME,cardINTRODUCE,cardPRICE,cardSL);
        if(checkGioHang(cardNAME,cardINTRODUCE)!=-1)
        {
            capNhatSLGioHang(checkGioHang(cardNAME,cardINTRODUCE));
        }
        else
        {
            gioHang.push(sp);
        }
        localStorage.setItem("gioHang",JSON.stringify(gioHang));
        soLuongSPGH();
        addCART(cardIMG,cardNAME,cardINTRODUCE,cardPRICE);
    })
}) 









//xem chi tiết sản phẩm và thêm sản phầm vào giỏ hàng
const nodeView=document.querySelectorAll(".card__view");
nodeView.forEach(function(item){
    item.addEventListener("click",function(event){
        let btnView=event.target;
        let elementParent=btnView.parentNode.parentNode;
        console.log(elementParent);
        let cardIMG = elementParent.querySelector(".card__img img").src;
        console.log(cardIMG);
        let cardNAME = elementParent.querySelector(".card__name").innerText;
        let cardINTRODUCE= elementParent.querySelector(".card__introduce").innerText;
        let cardPRICE= elementParent.querySelector(".card__price span").innerText;
        let cardIMG3 = elementParent.querySelector(".img3__hidden img").src;
        let cardIMG4 = elementParent.querySelector(".img4__hidden img").src;
        let cardDETAIL1=elementParent.querySelector(".detail1").innerText;
        let cardDETAIL2=elementParent.querySelector(".detail2").innerText;
        let cardDETAIL3=elementParent.querySelector(".detail3").innerText;
        let cardDETAIL4=elementParent.querySelector(".detail4").innerText;
        addViewProduct(cardIMG,cardNAME,cardINTRODUCE,cardPRICE,cardIMG3,cardIMG4,cardDETAIL1,cardDETAIL2,cardDETAIL3,cardDETAIL4);
    })
})
function addViewProduct(cardIMG,cardNAME,cardINTRODUCE,cardPRICE,cardIMG3,cardIMG4,cardDETAIL1,cardDETAIL2,cardDETAIL3,cardDETAIL4){
    document.querySelector(".container__view").innerHTML=" ";
    let viewItem=document.createElement("div");
    viewItem.setAttribute("class","view__item");
    viewItem.innerHTML=`
        <i class="far fa-window-close"></i>
        <div class="view__item--left">
                <div class="view__img--top">
                    <img src="`+cardIMG+`" alt="">
                </div>
                <div class="view__img--bottom">
                    <img src="`+cardIMG+`" alt="">
                    <img src="`+cardIMG3+`" alt="">
                    <img src="`+cardIMG4+`" alt="">
                </div>
        </div>
        <div class="view__item--right">
            <div class="view__name">
                    `+cardNAME+`
            </div>
            <div class="underline">
               <hr>
            </div>
            <div class="view__introduce">
                    `+cardINTRODUCE+`
            </div>
            <div class="view__price">
                    <p><span>`+cardPRICE+`</span><sup>VNĐ</sup></p>
            </div>
            <div class="view__star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fa-regular fa-star-half-alt"></i>
                    <span> | Đánh giá </span>
            </div>
            <div class="view__text">
                    <ul>
                        <li>`+cardDETAIL1+`</li>
                        <li>`+cardDETAIL2+`</li>
                        <li>`+cardDETAIL3+`</li>
                        <li>`+cardDETAIL4+`</li>
                    </ul>
            </div>
            <div class="view__action">
                <div class="view__input">
                    <button class="view__sub">-</button>
                    <input type="text" name="" id="input__number" value="1" min="1">
                    <button class="view__add">+</button>
                </div>
                <div class="view__addcart">
                        Thêm vào giỏ hàng
                </div>
            </div> `
            document.querySelector(".container__view").appendChild(viewItem);
            document.querySelector(".container__view").classList.add("activeView");
            let subView=document.querySelectorAll(".view__sub");
            let addView=document.querySelectorAll(".view__add");
            subView.forEach(function(item){
                item.addEventListener("click",function(){
                    let getQUANTITYView=document.querySelector("#input__number");
                    if(getQUANTITYView.value>0)
                        getQUANTITYView.value--;
                })
            })
            addView.forEach(function(item){
                item.addEventListener("click",function(){
                    let getQUANTITYView=document.querySelector("#input__number");
                    getQUANTITYView.value++;
                })
            })
            let previewItem=document.querySelector(".view__item");
            let nodeCloseView=previewItem.querySelector(".fa-window-close");
            nodeCloseView.addEventListener("click",function(){
                document.querySelector(".container__view").classList.remove("activeView");
            })
            //Bắt đầu sửa từ đây
            const nodeAddCartInView=document.querySelectorAll(".view__addcart");
            nodeAddCartInView.forEach(function(item){
                item.addEventListener("click",function(){
                    let sl=document.querySelector("#input__number").value;
                    let sp=new Array(cardIMG,cardNAME,cardINTRODUCE,cardPRICE,parseInt(sl));
                    if(checkGioHang(cardNAME,cardINTRODUCE)!=-1)
                    {
                      capNhatSLGioHang(checkGioHang(cardNAME,cardINTRODUCE));
                    }
                    else
                    {
                      gioHang.push(sp);
                    }
                    localStorage.setItem("gioHang",JSON.stringify(gioHang));
                    soLuongSPGH();
                    addCART(cardIMG,cardNAME,cardINTRODUCE,cardPRICE);
                })
            })
}


















// localStorage.clear();
//Cập nhật số lượng giỏ hàng nếu sản phẩm đó đã có trong giỏ hàng
function capNhatSLGioHang(vitri){
    for(let i=0;i<gioHang.length;i++){
        if(i==vitri){
            gioHang[i][4]+=1;
            break;
        }
    }
    localStorage.setItem("gioHang",JSON.stringify(gioHang));
}




//check sản phẩm đã có trong giỏ hàng chưa
function checkGioHang(cardNAME,cardINTRODUCE){
    let vitri=-1;
    for(let i=0;i<gioHang.length;i++){
        if(gioHang[i][1]==cardNAME&&gioHang[i][2]==cardINTRODUCE)
            vitri=i;
    }
    return vitri;
}




//Tăng số lượng và tính lại cột Total
function tangSoLuong(x){
    let bigNode=x.parentNode.parentNode.parentNode.parentNode;
    let A=x.parentNode.parentNode.parentNode.parentNode.parentNode.children[gioHang.length-1].nextElementSibling.children[0].children[0];
    let vitri=x.parentNode.parentNode.children[0].value;
    let soluong=x.parentNode.parentNode.children[2];
    let soluongNew=0;
    let sum=0;
    let totalPrice=0;
    for(let i=0;i<gioHang.length;i++)
    {
        if(vitri==i)
        {
            soluongNew=gioHang[i][4]+1;
            gioHang[i][4]+=1;
            sum=(gioHang[i][3]*gioHang[i][4])*1000;
            break;
        }
    }
    for(let i=0;i<gioHang.length;i++){
        totalPrice+=(gioHang[i][3]*gioHang[i][4])*1000;
    }
    localStorage.setItem("gioHang",JSON.stringify(gioHang));
    soluong.value=soluongNew;
    let total=bigNode.children[4].children[0];
    total.innerText=sum.toLocaleString();
    A.innerText=totalPrice.toLocaleString();
}


//Hàm giảm số lượng và tính lại cột Total
function giamSoLuong(x){
    let bigNode=x.parentNode.parentNode.parentNode.parentNode;
    let A=x.parentNode.parentNode.parentNode.parentNode.parentNode.children[gioHang.length-1].nextElementSibling.children[0].children[0];
    let vitri=x.parentNode.parentNode.children[0].value;
    let soluong=x.parentNode.parentNode.children[2];
    let soluongNew=0;
    let sum=0;
    let totalPrice=0;
    for(let i=0;i<gioHang.length;i++)
    {
        if(vitri==i){
            soluongNew=gioHang[i][4]-1;
            gioHang[i][4]-=1;
            if(gioHang[i][4]<1&&soluongNew<1)
            {
                soluongNew=1;
                gioHang[i][4]+=1;
            }
            sum=(gioHang[i][3]*gioHang[i][4])*1000;
            break;
        }
    }
    for(let i=0;i<gioHang.length;i++){
        totalPrice+=((gioHang[i][4]*gioHang[i][3])*1000);
    }
    // alert(totalPrice);
    localStorage.setItem("gioHang",JSON.stringify(gioHang));
    soluong.value=soluongNew;
    let total=bigNode.children[4].children[0];
    total.innerText=sum.toLocaleString();
    A.innerText=totalPrice.toLocaleString();
}


//Thông báo thêm vào giỏ hàng
function addCART(cardIMG,cardNAME,cardINTRODUCE,cardPRICE){
    swal({
        text:"Sản phẩm đã được thêm vào giỏ hàng!",
        timer:1500,
        button: "OK",
    });
}





//Xóa sản phẩm và cập nhật lại hàng THÀNH TIỀN 
function deleteProduct(x){
    let vitriNAME=x.parentNode.parentNode.children[0].children[1].innerText;
    let vitriINTRODUCT=x.parentNode.parentNode.children[1].innerText;
    let A=x.parentNode.parentNode.parentNode.children[gioHang.length-1].nextElementSibling.children[0].children[0];
    let totalPrice=0;
    for(let i=0;i<gioHang.length;i++)
    {
        if(gioHang[i][1]==vitriNAME&&gioHang[i][2]==vitriINTRODUCT)
        {
            for(let i=0;i<gioHang.length;i++){
                totalPrice+=(gioHang[i][3]*gioHang[i][4])*1000;
            }
            totalPrice-=(gioHang[i][3]*gioHang[i][4])*1000;
            gioHang.splice(i,1);
            let item=x.parentNode.parentNode;
            item.remove();
            break;
        }
    }
    localStorage.setItem("gioHang",JSON.stringify(gioHang));
    soLuongSPGH();
    showTrangThanhToan();
    A.innerText=totalPrice.toLocaleString();
}





//Create item bằng LocaleStorage
function showTrangThanhToan(){
    let gh=JSON.parse(localStorage.getItem("gioHang"));
    let kq="";
    if(gh!=null){
        let sum=0;
        for(let i=0;i<gh.length;i++)
        {
            sum+=((gh[i][4]*gh[i][3])*1000);
            kq+=`<tr>
            <td style="display: flex;align-items: center;"><img src="`+gh[i][0]+`" alt=""><span class="name__product">`+gh[i][1]+`</span></td>
            <td><p><span class="introduce_product">`+gh[i][2]+`</span></p></td>
            <td><p><span>`+gh[i][3]+`</span><sup>VNĐ</sup></p></td>
            <td><div class="change__quantity">
            <input type="hidden" value="`+i+`">
              <div class="add__cart">
                <button onclick="giamSoLuong(this)">
                  <i class="fa fa-minus"></i>
                </button>
              </div>
              <input style="width: 30px;" type="text" name="" id="" value="`+gh[i][4]+`" min="0" >
              <div class="sub__cart">
                <button onclick="tangSoLuong(this)" >
                  <i class="fa fa-plus"></i>
                </button>
              </div>
             </div></td>
            <td><p><span>`+((gh[i][4]*gh[i][3])*1000).toLocaleString()+`</span></p></td>
            <td><span onclick="deleteProduct(this)" style="cursor:pointer;" class="delete__product">Xóa</span></td>
        </tr>`
        if(i==gh.length-1)
            kq+=`<tfoot>
        <tr><td colspan="6" style="text-align: right;">Thành Tiền: <span>`+sum.toLocaleString()+`</span><sup>VNĐ</sup></td></tr>
        </tfoot`;
    }
}
    if (localStorage.getItem('gioHang')===null || localStorage.getItem('gioHang')=='[]'){
        kq+=`<tr><td colspan="6" style="height:60px;">Không có sản phẩm nào trong giỏ hàng !</td></tr>`
    }
        document.querySelector("tbody").innerHTML=kq;
        soLuongSPGH();
}