const container=document.getElementById("container");
const text=document.getElementById("text");
const submit=document.getElementById("submit");
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
const deleteDog = async (e)=>{
 try {
  e.preventDefault(); // để gửi form submit load lại trang dữ liệu biến không mất đi chứ load lại là mất dữ liệu nên không chạy
   let name=text.value;
   const response= await fetch("https://69706bd278fec16a63fd9efe.mockapi.io/dogs");
  const data= await response.json();
  if(name){
     const dog=data.find((currentVal)=>currentVal.name.toLowerCase()===(name.toLowerCase()));
     console.log("🚀 ~ deleteDog ~ dog:", dog)
     if(!dog){
      alert("Xóa thất bại! Vui lòng nhập đủ và đúng tên chó");
      
     }
     const deleted= await fetch("https://69706bd278fec16a63fd9efe.mockapi.io/dogs/"+dog.id,{
    method: "DELETE"
   }) ;
   alert("Xóa thành công");
   location.reload();
  }else{
    alert("Không có gì để xóa")
  }
   
   
 } catch (error) {
  console.log(error)
 
 }
}

submit.addEventListener("click", deleteDog);