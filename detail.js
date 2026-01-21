const container=document.getElementById("container");

const params= new URLSearchParams(window.location.search);
const id=params.get("id");

async function fetchDogById(){
    try {
        const response= await fetch("https://69706bd278fec16a63fd9efe.mockapi.io/dogs/"+id);
        const data= await response.json();
        console.log("🚀 ~ fetchDogById ~ data:", data)
        const html= `
        <a href="./index.html" class="back">Quay lại</a>
        <div class="card">
        <img class="image" src="${data.image}" alt="anh"/>
            <div class="contentRight">
             <h2>${data.name}</h2>
             <h3>${data.price.toLocaleString("vi-VN")} đ</h3>
             
             <div class="info">
             <h3>Thông tin:</h3>
             <div class="containsInfo">
             <span>Age: ${data.age}</span>
             <span>Gender: ${data.gender}</span>
             <span>Color: ${data.color}</span></div>
             </div>
             <div class="mota">
            <h3>Mô tả: </h3>
            <p>${data.description}</p>
             </div>
             <button>Mua ngay</button>
            </div>
        </div>
            `
        
        container.innerHTML=html;
    } catch (error) {
        console.log(error);
    }
}
fetchDogById();