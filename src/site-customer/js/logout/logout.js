window.addEventListener("load", function(){
    let logoutBtn = document.querySelector(".logout .logoutclick")
    
    function logOut(){
        localStorage.removeItem('user')
        location.reload()
    }
    
    logoutBtn.addEventListener("click", function(){
        logOut()
    })

})