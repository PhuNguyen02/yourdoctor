window.addEventListener("load", (event) => { 
    let Products = localStorage.getItem('Products')
    
    if (!Products) {
        Products = new Array();
    } else {
        Products = JSON.parse(Products)
    }

    for (let item of Products) {
        let htmProductlist = `
        <tr>
          <td>${item.id}</td>
          <td>Dược sĩ Phạm Trang</td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantityInstock}</td>
          <td>${item.unit}</td>
          <td>${item.quantityOfUnit}</td>
          <td>${item.brand}</td>
          <td>Chưa rõ thành phần</td>
        </tr>
          
        `

        document.querySelector('#example2 tbody').innerHTML += htmProductlist
    }
})