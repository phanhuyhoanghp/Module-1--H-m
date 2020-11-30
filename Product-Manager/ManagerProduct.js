let product = ["Iphone X", "Samsung Galaxy Note", "Sony"];
showAllProduct();
function showAllProduct(){
    let content="";
    for (let i = 0; i < product.length ; i++) {
        content +='        <tr>\n' +
            '            <td>'+(i+1)+'</td>\n' +
            '            <td>'+ product[i] +'</td>\n' +
            '            <td><button onclick="editProduct('+i+')">Edit</button></td>\n' +
            '            <td><button onclick="deleteProduct()">Delete</button></td>\n' +
            '        </tr>'
    }
    document.getElementById("list").innerHTML= content;
}
function addNewProduct() {
    //buoc 1: Lay ten từ ô input
    let newP = document.getElementById("newProduct").value;
    //bước 2: add tên vào mảng
    product.push(newP);
    //bước 3: hiển thị lại danh sách
    showAllProduct();
    //bước 4: làm trắng lại nút tạo mới;
    document.getElementById("newProduct").value = "";
}

function editProduct(index) {
    //Bước 1: Đưa ra ô để nhập dữ liệu
    let newName = prompt("Mời bạn nhập giá trị mới", product[index]);
    //Bước 2: Gán giá trị mới cho index
    product[index] = newName;
    //Bước 3: Hiển thị lại mảng
    showAllProduct();
}
function deleteProduct(index){
    product.splice(index,1);
    showAllProduct();
}
