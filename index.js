 function handleformSubmit(event){
    event.preventDefault();
    let siteDetails={
        title:event.target.title.value,
        url:event.target.webUrl.value
    }
    axios.post("https://crudcrud.com/api/5613b7d227f4483f9725dafd8cb6ec52/appointmentData",siteDetails)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    showSitesonScreen(siteDetails)
}
function showSitesonScreen(obj){
    let siteList=document.querySelector("ul")
    let siteItem=document.createElement("li")
    siteItem.appendChild(document.createTextNode(
        `${obj.title} > ${obj.url}`))
    let delBtn=document.createElement("button")
    delBtn.appendChild(document.createTextNode("Delete"))
    siteItem.appendChild(delBtn)
    let editBtn=document.createElement("button")
    editBtn.appendChild(document.createTextNode("Edit"))
    siteItem.appendChild(editBtn)
    siteList.appendChild(siteItem)

    delBtn.addEventListener("click",function(){
        siteList.removeChild(siteItem)
        axios.delete(`https://crudcrud.com/api/5613b7d227f4483f9725dafd8cb6ec52/appointmentData/${obj._id}`)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err)) 
    })
    editBtn.addEventListener("click",function(){
        siteList.removeChild(siteItem)
        axios.delete(`https://crudcrud.com/api/5613b7d227f4483f9725dafd8cb6ec52/appointmentData/${obj._id}`)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err)) 

        document.getElementById("title").value=obj.title
        document.getElementById("webUrl").value=obj.webUrl

    })
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/5613b7d227f4483f9725dafd8cb6ec52/appointmentData")
    .then((res)=>{
      console.log(res)
      for(let i=0;i<res.data.length;i++){
        showSitesonScreen(res.data[i]);
      }
    })
    .catch((err)=>console.log(err))
  })