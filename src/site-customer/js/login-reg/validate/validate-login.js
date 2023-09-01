window.addEventListener("load", function () {
    let email = document.getElementById("login-email")
    let pswd = document.getElementById("login-pswd")
    let loginForm = document.getElementById("login-form")

   

    
    function showError(input, messeage) {
        let parent = input.parentElement
        let small = parent.querySelector('small')

        parent.classList.add('error')
        small.innerText = messeage
    }



    function showSuccess(input) {
        let parent = input.parentElement
        let small = parent.querySelector('small')

        parent.classList.remove('error')
        small.innerText = ''
    }

    function checkEmptyInvalid(listInput) {
        let isEmptyInvalid = false
        listInput.forEach((input) => {
            input.value.trim()

            if (!input.value) {
                isEmptyInvalid = true
                showError(input, 'Không được để trống!')
            } else {
                showSuccess(input)
            }
        })
        return isEmptyInvalid
    }
    function validatePassword(input) {

        var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        // Check if the password is empty
        if (input.value == "") {
           showError(input,"Vui lòng nhập mật khẩu")
        }
        // Kiểm tra xem mật khẩu có đủ mạnh không
        if (!input.value.toString().match(passwordRegex)) {
            showError(input,"Mật khẩu phải dài ít nhất 8 ký tự và chứa ít nhất một chữ thường, một chữ in hoa và một số");
            return false;
        }
        // If all checks pass, return true
        return true;
    }


    loginForm.addEventListener("submit", function (e) {
        e.preventDefault()

        let isEmptyInvalid = checkEmptyInvalid([email, pswd])
        let isPassWordInvalid = validatePassword(pswd)
        if (isPassWordInvalid) {
            let usersStorage = localStorage.getItem('listuser')
            if (!usersStorage) {
                usersStorage = new Array();
            } else {
                usersStorage = JSON.parse(usersStorage)
            }
            // const indexOfUser = usersStorage.findIndex(i => i.email === email.value && i.pswd === pswd.value);
            
            let check = false
        
            for(let i = 0; i < usersStorage.length;i++){
                if(usersStorage[i].email == email.value && usersStorage[i].pswd == pswd.value && usersStorage[i].admin == false)
                {
                    localStorage.setItem('user',JSON.stringify(usersStorage[i]))
                    check = true
                    break
                }
            }
            let checkadmin = false
            for(let i = 0; i < usersStorage.length;i++){
                if(usersStorage[i].email == email.value && usersStorage[i].pswd == pswd.value && usersStorage[i].admin == true)
                {
                    localStorage.setItem('admin',JSON.stringify(usersStorage[i]))
                    checkadmin = true
                    break
                }
            }
            if (check) {
                location.href = "http://localhost:3000/"
            } else if (checkadmin){
                location.href = "http://localhost:3000/site-admin/pages/admin.html"
            } 
            else {
                showError(pswd,"Sai mật khẩu!")
            }

            document.getElementById("login-pswd").value =''
        }



    })


})