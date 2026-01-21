const container=document.getElementById("container");

const fetchDogs = async ()=>{
  try {
  const response= await fetch("https://69706bd278fec16a63fd9efe.mockapi.io/dogs");
  const data= await response.json();
  const html= data.map((currentVal)=>{
     return `
       <div class="card">
       <a href="./detail.html?id=${currentVal.id}">
       <img src="${currentVal.image}"/>
       <div class="khoi">Detail</div>
       <h3>${currentVal.name}</h3>
        <p>${currentVal.price.toLocaleString("vi-VN")} đ</p>
       </a>
       </div>
     `
  }).join("");
  container.innerHTML=html;
  } catch (error) {
    console.log(error);
  }
 
}

fetchDogs();