
    // localStorage.clear();
    window.addEventListener("load", (event) => {
        let listCart = localStorage.getItem('listCart')
        if (!listCart) {
            listCart = new Array();
        } else {
            listCart = JSON.parse(listCart)
        }
        console.log(listCart)
        for (let item of listCart) {
            let htmlCart = `
            <div class="list-cart">
                <a href="" class="cart-item">
                    <img src="${item.productImg}" alt="">
                </a>
                <div class="cart-body">
                    <div class="cart-selector">
                        <h3 class="product-title">${item.productName}</h3>
                        <div class="price">
                            <p>${item.productPrice}</p>
                        </div>
                        <div class="quantity">
                            <input type="number" id="quantity" data-id="${item.productId}"  value="${item.quantity}">
                        </div>
                        <button>
                        <i class="fa-solid fa-trash deleteProduct" data-id="${item.productId}"></i>
                        </button>
                    </div>

                </div>
            </div>
            `
            document.querySelector('.cart-wrapper').innerHTML += htmlCart
        }

        onTotalOrder();

        // cập nhật số lượng tương ứng cho từng sản phẩm
        document.querySelectorAll('#quantity').forEach(button => {
            button.onchange = function (e) {
                let listCart = localStorage.getItem('listCart')
                if (!listCart) {
                    listCart = new Array();
                } else {
                    listCart = JSON.parse(listCart)
                }
                // get value id tương ứng sản phẩm chọn mua
                const productId = e.target?.getAttribute("data-id");
                let cartStorage = listCart.find(function (item) {
                    return Number(item?.productId) === Number(productId);
                });
                if (cartStorage && Number(e.target.value) > 0) {
                    cartStorage.quantity = e.target.value
                    localStorage.setItem('listCart', JSON.stringify(listCart))
                    onTotalOrder();
                }
            }
        });

        document.querySelectorAll('.deleteProduct').forEach(button => {
            button.onclick = function (e) {
                // get value id tương ứng sản phẩm chọn mua
                const productId = e.target?.getAttribute("data-id");
                let listCart = localStorage.getItem('listCart')
                if (!listCart) {
                    listCart = new Array();
                } else {
                    listCart = JSON.parse(listCart)
                }
                // lấy vị trí index đầu tiên thoả mãn điều kiện productId
                let cartIndex = listCart.findIndex(v => Number(v.productId) === Number(productId))
                if (cartIndex != -1) {
                    //  xoá data trong  localStorage
                    listCart.splice(cartIndex, 1);
                    localStorage.setItem('listCart', JSON.stringify(listCart))

                    // xoá Element hiển thị trên web
                    let button_remove = e.target
                    button_remove?.parentElement?.parentElement.remove()
                    onTotalOrder();
                }
            }
        });

        // tính tổng
        function onTotalOrder() {
            let listCart = localStorage.getItem('listCart')
            if (!listCart) {
                listCart = new Array();
            } else {
                listCart = JSON.parse(listCart)
            }
            const sum = listCart.reduce((accumulator, object) => {
                var price = object.productPrice.slice(0, -1)
                price = price.replace('.','')
                
                console.log(price)
                return accumulator + price * object.quantity;
            }, 0);
            const VND = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              })
            document.querySelector('.price-item').innerText = VND.format(sum)
        }
    });
