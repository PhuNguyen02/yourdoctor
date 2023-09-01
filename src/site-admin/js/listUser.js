window.addEventListener("load", (event) => { 
    let listuser =localStorage.getItem('listuser')
    
    if (!listuser) {
        listuser = new Array();
    } else {
      listuser = JSON.parse(listuser)
    }

    for (let item of listuser) {
        let htmlUserList = `
      <tbody>
        <tr>
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>${item.admin}</td>
        </tr>
      </tbody>        
        `

        document.querySelector('.tableUserList').innerHTML += htmlUserList
    }
})