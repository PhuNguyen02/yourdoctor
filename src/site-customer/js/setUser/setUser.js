window.addEventListener("load", function(){
    let user = JSON.parse(localStorage.getItem('user'))

        let cart = document.querySelector('.cart a')
        let parent = document.querySelector('.right-side')
        let loginBtn = document.querySelector('.login')

        let userInfor = document.createElement('div')
        userInfor.classList = 'avatar'
        userInfor.innerHTML = `<i class="fa-solid fa-user"></i>
        <span>${user.name}</span>
        <div class="logout">
        <a href = "http://localhost:3000/site-customer/pages/editProfile/editProfile.html">Quản lý tài khoản</a>
                        <a href = "#" class ="logoutclick">Đăng xuất</a>
                    </div>`


        if (user !== null){
            
            parent.replaceChild(userInfor,loginBtn)
        }
        
        cart.addEventListener('click', function(e){
            e.preventDefault()
            location.href = 'http://localhost:3000/site-customer/pages/cart/cart.html'
        })
        
    

})

