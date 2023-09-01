window.addEventListener("load", function(){
    let product = JSON.parse(localStorage.getItem('product'))
    console.log(product)
    let productdiv = `
    <div class="brand-name">
    <span>Thương hiệu: </span>
    <span><a href="">Bounty</a></span>
</div>
<div class="product-name">
     <span>
        <h3>${product.name}</h3>
    </span> 
</div>
<div class="product-price">
        <span>${product.price}</span>
        <span> / </span>
        <span>Hộp</span>
</div>
<table class="content-list">
    <tbody>
        
      
        <tr class="unit">
            <td>Đơn vị tính</td>
            <td><p>${product.unit}</p></td>
        </tr>
        <tr class="category">
            <td><p>Danh mục</p></td>
            <td>
                <a href="">Vitamin</a>
            </td>
        </tr>
        <tr class="quantityOfUnit">
            <td>Quy cách</td>
            <td>${product.quantityOfUnit}</td>
        </tr>
    </tbody>
</table>
<!-- Thêm vào giỏ hàng -->
<div class="addToCart">
    <div class="quantityToCart">
        <span>Chọn số lượng</span>
        <div class="quantityInput">
            <input type="number" min="1" max="9999" value="1">
        </div>
        <span class="quantityInStock">
            <p>Hiện đang có ${product.quantityInstock} sản phẩm</p>
        </span>
    </div>
    <div class="button-addtocart-Area">
        <div class="btn-addToCart" ">
            <button  class="AddToCart-button" data-id="${product.id}">Thêm vào giỏ hàng</button>
        </div>
        <div class="btn-placePharmacist">
            <button>Nhà thuốc của dược sĩ</button>
        </div>
    </div>
</div>
    `
    document.querySelector(".detail-infomation-right").innerHTML += productdiv


        
    document.querySelector(".AddToCart-button").addEventListener("click", function(e){
        const productId = e.target?.getAttribute("data-id")
      
            if(product.id == productId){
                let listCart = localStorage.getItem('listCart')
                if (!listCart) {
                    listCart = new Array();
                } else {
                    listCart = JSON.parse(listCart)
                }
        
                let cartStorage = listCart.find(function (item) {
                    return Number(item?.productId) === Number(productId);
                })
                let cart = {
                    productId: productId,
                    productName: product.name,
                    productPrice: product.price,
                    quantity: 1,
                    purchaseTime: new Date(),
                    productImg: product.img,
                }
                if (cartStorage != null) {
                    if (cartStorage.quantity >= product.quantityInStock) {
                        alert('Số lượng không đủ! ')
                        return;
                    }
                    cartStorage.quantity++;  // Thay đổi số lượng, sản phẩm đã có trong giỏ hàng
                } else {
                    listCart.push(cart);
                }
                localStorage.setItem('listCart', JSON.stringify(listCart)) // lưu data vào localStorage
    
            }
        
        
       
    })

})