window.addEventListener("load", function(){
    let fullname = document.getElementById("sign-name")
    let email = document.getElementById("sign-email")
    let pswd = document.getElementById("sign-pswd")
    let confirmPswd = document.getElementById("sign-rpswd")
    let form = document.getElementById("signUp-form")
    
    class User {
        constructor(name, email, pswd) {
            this.name = name
            this.email = email
            this.pswd = pswd
            this.admin = false
        }
        
    
    }

     admin = [
        {
            name: 'admin',
            email: 'admin@gmail.com',
            pswd: 'Admin123456789@@',
            admin: true
        }
     ]

  

    function showError(input, messeage){
       let parent = input.parentElement
       let small = parent.querySelector('small')
    
        parent.classList.add('error')
        small.innerText = messeage
    }
    
    function showSuccess(input){
        let parent = input.parentElement
       let small = parent.querySelector('small')
    
        parent.classList.remove('error')
        small.innerText = ''
    }
    function checkEmptyInvalid(listInput){
        let isEmptyInvalid = false
        listInput.forEach((input) => {
            input.value.trim()

            if(!input.value){
                isEmptyInvalid = true
                showError(input, 'Không được để trống!')
            }else{
                showSuccess(input)
            }
        })
        return isEmptyInvalid
    }

    function checkEmailInvalid(input){
        const regexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        input.value.trim()
        let isEmailInvalid = !regexEmail.test(input.value)
        if(regexEmail.test(input.value)){
            showSuccess(input)
        } else {
            showError(input,"Nhập email sai định dạng, Vui lòng nhập lại")
        }
        return isEmailInvalid
    }
    
    function checkPassInvalid(input){
        var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")

        input.value.trim()
        let isPasswordInvalid = !passwordRegex.test(input.value)

        if(passwordRegex.test(input.value)){
            showSuccess(input)
        } else{
            showError(input,"Mật khẩu phải dài ít nhất 8 ký tự và chứa ít nhất một chữ thường, một chữ in hoa và một số")
        }
        return isPasswordInvalid
    }


   

    form.addEventListener("submit", function(e){
        e.preventDefault()
        let UserSignUp = new User(fullname.value, email.value, pswd.value)
        let UserStorage = localStorage.getItem('listuser')
        let isEmptyInvalid =  checkEmptyInvalid([fullname, email, pswd, confirmPswd])
        let isEmailInvalid = checkEmailInvalid(email)
        let isPassWordInvalid = checkPassInvalid(pswd)
        
   
        if(!UserStorage){
            UserStorage = new Array()
        } else {
            UserStorage = JSON.parse(UserStorage)
        }

        const indexOfUser = UserStorage.findIndex(i => i.email === email);
            if (indexOfUser !== -1) {
                showError(email,"Tài khoản đã tồn tại")
            } else if(isEmptyInvalid ||isEmailInvalid|| isPassWordInvalid){

            } else {
                UserStorage.push(UserSignUp)
                localStorage.setItem('listuser', JSON.stringify(UserStorage))
                alert('Đăng ký thành công !')
            }

        
    })



})

    
