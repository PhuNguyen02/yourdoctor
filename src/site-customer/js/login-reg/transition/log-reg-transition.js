window.addEventListener("load", function(){
    
    let loginlink = document.querySelector(".login-link")
        let registerlink = document.querySelector(".register-link")
    
        let wrapper = document.querySelector(".container")
        registerlink.addEventListener('click', function(){
            wrapper.classList.add("active") 
        })
        loginlink.addEventListener('click',function (){
            wrapper.classList.remove("active") 
        })
})



